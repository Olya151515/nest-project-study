import { UserEntity } from '../../../database/entities/user.entity';
import { IJwtPayload } from '../../auth/models/interfaces/jwt-payload.interface';
import { IUserData } from '../../auth/models/interfaces/user-data.interface';
import { UserDtoRes } from '../models/dto/res/user.res.dto';
export declare class UserMapper {
    static toResDto(user: UserEntity): UserDtoRes;
    static toIUserData(user: UserEntity, payload: IJwtPayload): IUserData;
}
