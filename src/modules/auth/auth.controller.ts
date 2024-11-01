import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { CurrentUser } from './decorators/current-user-decorator';
import { SkipAuth } from './decorators/skip-auth-decorator';
import { JwtRefreshGuard } from './guards/jwt-refresh-guard';
import { SignInDtoReq } from './models/dto/req/sign-in.req.dto';
import { SignUpDtoReq } from './models/dto/req/sign-up.req.dto';
import { AuthResDto } from './models/dto/res/auth.res.dto';
import { ITokenPair } from './models/interfaces/token-pair.interface';
import { IUserData } from './models/interfaces/user-data.interface';
import { AuthService } from './services/auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @SkipAuth()
  @Post('sign-up')
  public async signUp(@Body() dto: SignUpDtoReq): Promise<AuthResDto> {
    return await this.authService.signUp(dto);
  }
  @SkipAuth()
  @Post('sign-in')
  public async signIn(@Body() dto: SignInDtoReq): Promise<AuthResDto> {
    return await this.authService.signIn(dto);
  }

  @ApiBearerAuth() //  ми хочемо робити sigh-out тільки коли ми авторизовані
  @Post('sign-out')
  public async signOut(@CurrentUser() userData: IUserData): Promise<void> {
    return await this.authService.signOut(userData);
  }

  @SkipAuth()
  @ApiBearerAuth()
  @UseGuards(JwtRefreshGuard)
  @Post('refresh') // видалення наших tokens  і створення нової пари tokens
  public async refresh(
    @CurrentUser() userData: IUserData,
  ): Promise<ITokenPair> {
    return await this.authService.refresh(userData);
  }
}
