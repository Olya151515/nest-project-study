import { PickType } from '@nestjs/swagger';

import { UserBaseResDto } from './user-base.res.dto';

export class UserResDto extends PickType(UserBaseResDto, [
  'id',
  'name',
  'email',
  'bio',
  'image',
]) {}

export class UserDtoRes {
  id: string;
  name: string;
  email: string;
  bio: string;
  image?: string;
}
