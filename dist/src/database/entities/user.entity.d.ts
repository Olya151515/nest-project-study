import { UserID } from '../../common/types/entity-ids.type';
import { ArticleEntity } from './article.entity';
import { CommentEntity } from './comment.entity';
import { FollowEntity } from './follow.entity';
import { LikeEntity } from './like.entity';
import { CreateUpdateModel } from './models/create-update.model';
import { RefreshTokenEntity } from './refresh-token.entity';
export declare class UserEntity extends CreateUpdateModel {
    id: UserID;
    name: string;
    email: string;
    password: string;
    isActive: boolean;
    bio: string;
    image: string;
    deleted?: Date;
    refreshTokens?: RefreshTokenEntity[];
    articles?: ArticleEntity[];
    comments?: CommentEntity[];
    likes?: LikeEntity[];
    followers?: FollowEntity[];
    followings?: FollowEntity[];
}
