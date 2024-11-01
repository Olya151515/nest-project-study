import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { RefreshTokenRepository } from '../../repository/services/refresh-token.repository';
import { UserRepository } from '../../repository/services/user.repository';
import { UserMapper } from '../../users/services/user.mapper';
import { SignInDtoReq } from '../models/dto/req/sign-in.req.dto';
import { SignUpDtoReq } from '../models/dto/req/sign-up.req.dto';
import { AuthResDto } from '../models/dto/res/auth.res.dto';
import { ITokenPair } from '../models/interfaces/token-pair.interface';
import { IUserData } from '../models/interfaces/user-data.interface';
import { AuthCacheService } from './auth-cache-service';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly tokenService: TokenService,
    private readonly authCacheService: AuthCacheService,
    private readonly refreshTokenRepository: RefreshTokenRepository,
  ) {}
  public async signUp(dto: SignUpDtoReq): Promise<AuthResDto> {
    await this.isEmailNotExistOrThrow(dto.email);
    const passwordHash = await bcrypt.hash(dto.password, 10);

    const userData: SignUpDtoReq = { ...dto, password: passwordHash };
    const user = await this.userRepository.save(
      this.userRepository.create(userData),
    );
    const tokens = await this.tokenService.generateAuthTokens({
      userId: user.id,
      deviceId: dto.deviceId,
    });

    await this.authCacheService.saveToken(
      tokens.accessToken,
      user.id,
      dto.deviceId,
    );
    await this.refreshTokenRepository.save(
      this.refreshTokenRepository.create({
        user_id: user.id,
        deviceId: dto.deviceId,
        refreshToken: tokens.refreshToken,
      }),
    );

    return { user: UserMapper.toResDto(user), tokens };
  }

  public async signIn(dto: SignInDtoReq): Promise<AuthResDto> {
    const user = await this.userRepository.findOne({
      where: { email: dto.email },
      select: ['id', 'password'],
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    const isPasswordValid = await bcrypt.compare(dto.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    const tokens = await this.tokenService.generateAuthTokens({
      userId: user.id,
      deviceId: dto.deviceId,
    });

    await this.authCacheService.saveToken(
      tokens.accessToken,
      user.id,
      dto.deviceId,
    );
    await this.refreshTokenRepository.save(
      this.refreshTokenRepository.create({
        user_id: user.id,
        deviceId: dto.deviceId,
        refreshToken: tokens.refreshToken,
      }),
    );

    const userEntity = await this.userRepository.findOneBy({ id: user.id });
    return { user: UserMapper.toResDto(userEntity), tokens };
  }

  public async signOut(userData: IUserData): Promise<void> {
    await Promise.all([
      await this.authCacheService.deleteToken(
        userData.userId,
        userData.deviceId,
      ),
      await this.refreshTokenRepository.delete({
        user_id: userData.userId,
        deviceId: userData.deviceId,
      }),
    ]);
  }

  public async refresh(userData: IUserData): Promise<ITokenPair> {
    await Promise.all([
      await this.authCacheService.deleteToken(
        userData.userId,
        userData.deviceId,
      ),
      await this.refreshTokenRepository.delete({
        user_id: userData.userId,
        deviceId: userData.deviceId,
      }),
    ]);

    const tokens = await this.tokenService.generateAuthTokens({
      userId: userData.userId,
      deviceId: userData.deviceId,
    });

    await this.authCacheService.saveToken(
      tokens.accessToken,
      userData.userId,
      userData.deviceId,
    );
    await this.refreshTokenRepository.save(
      this.refreshTokenRepository.create({
        user_id: userData.userId,
        deviceId: userData.deviceId,
        refreshToken: tokens.refreshToken,
      }),
    );

    return tokens;
  }

  private async isEmailNotExistOrThrow(email: string) {
    const user = await this.userRepository.findOneBy({ email });
    if (user) {
      throw new Error('Email already exists');
    }
  }
}
