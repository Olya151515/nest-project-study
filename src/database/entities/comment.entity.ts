import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import {
  ArticleID,
  CommentID,
  UserID,
} from '../../common/types/entity-ids.type';
import { ArticleEntity } from './article.entity';
import { TableNameEnum } from './enums/table-name.enum';
import { CreateUpdateModel } from './models/create-update.model';
import { UserEntity } from './user.entity';

@Entity(TableNameEnum.COMMENTS)
export class CommentEntity extends CreateUpdateModel {
  @PrimaryGeneratedColumn('uuid')
  id: CommentID;

  @Column('text')
  body: string;

  @Column()
  article_id: ArticleID;
  @ManyToOne(() => ArticleEntity, (entity) => entity.comments, {
    onDelete: 'CASCADE', // якщо видаляться articles user's, тоді видалити comments
  })
  @JoinColumn({ name: 'article_id' })
  article?: ArticleEntity;

  @Column()
  user_id: UserID;
  @ManyToOne(() => UserEntity, (entity) => entity.comments)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}
