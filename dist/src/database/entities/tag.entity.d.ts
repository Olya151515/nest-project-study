import { TagID } from '../../common/types/entity-ids.type';
import { ArticleEntity } from './article.entity';
import { CreateUpdateModel } from './models/create-update.model';
export declare class TagEntity extends CreateUpdateModel {
    id: TagID;
    name: string;
    articles: ArticleEntity[];
}
