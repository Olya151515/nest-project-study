import { UserID } from '../../common/types/entity-ids.type';
import { IUserData } from '../auth/models/interfaces/user-data.interface';
import { UpdateUserReqDto } from './models/dto/req/update-user.req.dto';
import { UserDtoRes } from './models/dto/res/user.res.dto';
import { UsersService } from './services/users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findMe(userData: IUserData): Promise<UserDtoRes>;
    updateMe(userData: IUserData, updateUserDto: UpdateUserReqDto): Promise<UserDtoRes>;
    removeMe(userData: IUserData): Promise<void>;
    findOne(userId: UserID): Promise<UserDtoRes>;
    follow(userId: UserID, userData: IUserData): Promise<void>;
    unfollow(userId: UserID, userData: IUserData): Promise<void>;
}
