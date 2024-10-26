import { PickType } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

import { BaseAuthReqDto } from './base-auth.req.dto';

export class SignUpReqDto extends PickType(BaseAuthReqDto, [
  'email',
  'password',
  'bio',
  'name',
  'deviceId',
]) {}

export class SignUpDtoReq {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  bio?: string;

  @IsString()
  name: string;

  @IsString()
  deviceId: string;
}
