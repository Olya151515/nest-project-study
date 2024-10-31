import { PickType } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

import { BaseAuthReqDto } from './base-auth.req.dto';

export class SignInReqDto extends PickType(BaseAuthReqDto, [
  'email',
  'password',
  'deviceId',
]) {}

export class SignInDtoReq {
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  @IsString()
  deviceId: string;
}
