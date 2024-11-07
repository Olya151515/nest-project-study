import { ArticleID, LikeID, UserID } from '../../common/types/entity-ids.type';
import { ArticleEntity } from './article.entity';
import { UserEntity } from './user.entity';
export declare class LikeEntity {
    id: LikeID;
    created: Date;
    user_id: UserID;
    user?: UserEntity;
    article_id: ArticleID;
    article?: ArticleEntity;
}
