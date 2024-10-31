import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsEmail, IsString, Length, Matches } from 'class-validator';

import { BaseAuthReqDto } from './base-auth.req.dto';

type SignInReqKeys = ('email' | 'password' | 'deviceId')[];
export class SignInReqDto extends PickType(BaseAuthReqDto, [
  'email',
  'password',
  'deviceId',
] as SignInReqKeys) {}

export class SignInDtoReq {
  @IsEmail()
  email: string;
  @ApiProperty({ example: '123qwe!@#QWE' })
  @IsString()
  @Length(0, 300)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%_*#?&])[A-Za-z\d@$_!%*#?&]{8,}$/)
  password: string;
  @IsString()
  deviceId: string;
}
