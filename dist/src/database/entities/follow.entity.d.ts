import { FollowID, UserID } from '../../common/types/entity-ids.type';
import { UserEntity } from './user.entity';
export declare class FollowEntity {
    id: FollowID;
    created: Date;
    follower_id: UserID;
    follower?: UserEntity;
    following_id: UserID;
    following?: UserEntity;
}
