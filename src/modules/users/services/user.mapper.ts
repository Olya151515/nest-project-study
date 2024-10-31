import { UserEntity } from '../../../database/entities/user.entity';
import { IJwtPayload } from '../../auth/models/interfaces/jwt-payload.interface';
import { UserDtoRes } from '../models/dto/res/user.res.dto';

export class UserMapper {
  public static toResDto(user: UserEntity): UserDtoRes {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      bio: user.bio,
      image: user.image,
    };
  }
  public static toIUserData(user: UserEntity, payload: IJwtPayload): any {
    return {
      userId: user.id,
      deviceId: payload.deviceId,
      email: user.email,
    };
  }
}
