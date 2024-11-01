import { ApiProperty, PickType } from '@nestjs/swagger';

import { UserID } from '../../../../../common/types/entity-ids.type';
import { UserBaseResDto } from './user-base.res.dto';

export class UserResDto extends PickType(UserBaseResDto, [
  'id',
  'name',
  'email',
  'bio',
  'image',
]) {}

export class UserDtoRes {
  @ApiProperty({ type: String })
  id: UserID;
  name: string;
  email: string;
  bio?: string;
  image?: string;
}
