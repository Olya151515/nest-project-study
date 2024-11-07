import { ConfigService } from '@nestjs/config';
import { UserID } from '../../../common/types/entity-ids.type';
import { Config } from '../../../configs/config-type';
import { UserEntity } from '../../../database/entities/user.entity';
import { IUserData } from '../../auth/models/interfaces/user-data.interface';
import { FollowRepository } from '../../repository/services/follow.repository';
import { RefreshTokenRepository } from '../../repository/services/refresh-token.repository';
import { UserRepository } from '../../repository/services/user.repository';
import { UpdateUserReqDto } from '../models/dto/req/update-user.req.dto';
export declare class UsersService {
    private readonly configService;
    private userRepository;
    private followRepository;
    private refreshTokenRepository;
    constructor(configService: ConfigService<Config>, userRepository: UserRepository, followRepository: FollowRepository, refreshTokenRepository: RefreshTokenRepository);
    findMe(userData: IUserData): Promise<UserEntity>;
    updateMe(userData: IUserData, dto: UpdateUserReqDto): Promise<UserEntity>;
    removeMe(userData: IUserData): Promise<void>;
    findOne(userId: UserID): Promise<UserEntity>;
    follow(userData: IUserData, userId: UserID): Promise<void>;
    unfollow(userData: IUserData, userId: UserID): Promise<void>;
    private isUserExist;
}
