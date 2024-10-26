import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { RefreshTokenRepository } from '../../repository/services/refresh-token.repository';
import { UserRepository } from '../../repository/services/user.repository';
import { UserMapper } from '../../users/services/user.mapper';
import { SignInReqDto } from '../models/dto/req/sign-in.req.dto';
import { SignUpDtoReq } from '../models/dto/req/sign-up.req.dto';
import { AuthResDto } from '../models/dto/res/auth.res.dto';
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

  public async signIn(dto: SignInReqDto): Promise<any> {}

  private async isEmailNotExistOrThrow(email: string) {
    const user = await this.userRepository.findOneBy({ email });
    if (user) {
      throw new Error('Email already exists');
    }
  }
}
