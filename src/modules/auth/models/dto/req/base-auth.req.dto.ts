import { PickType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import { BaseUserReqDto } from '../../../../users/models/dto/req/base-user.req.dto';

export class BaseAuthReqDto extends PickType(BaseUserReqDto, [
  'email',
  'password',
  'bio',
  'image',
  'name',
]) {
  @IsNotEmpty()
  @IsString()
  readonly deviceId: string; // щоб привязувати tokens до конкретного device , щоб потім ідентифікувати девайси
}

export class BaseAuthDtoReq {
  email: string;
  password: string;
  bio: string;
  image: string;
  name: string;
  deviceId: string;
}
