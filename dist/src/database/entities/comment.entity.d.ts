import { ArticleID, CommentID, UserID } from '../../common/types/entity-ids.type';
import { ArticleEntity } from './article.entity';
import { CreateUpdateModel } from './models/create-update.model';
import { UserEntity } from './user.entity';
export declare class CommentEntity extends CreateUpdateModel {
    id: CommentID;
    body: string;
    article_id: ArticleID;
    article?: ArticleEntity;
    user_id: UserID;
    user?: UserEntity;
}
