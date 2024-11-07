import { ArticleID, UserID } from '../../common/types/entity-ids.type';
import { CommentEntity } from './comment.entity';
import { LikeEntity } from './like.entity';
import { CreateUpdateModel } from './models/create-update.model';
import { TagEntity } from './tag.entity';
import { UserEntity } from './user.entity';
export declare class ArticleEntity extends CreateUpdateModel {
    id: ArticleID;
    title: string;
    description?: string;
    body?: string;
    likes: LikeEntity[];
    comments: CommentEntity[];
    user_id: UserID;
    user?: UserEntity;
    tags: TagEntity[];
}
