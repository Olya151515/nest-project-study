import { DataSource, Repository } from 'typeorm';
import { CommentEntity } from '../../../database/entities/comment.entity';
export declare class CommentRepository extends Repository<CommentEntity> {
    private readonly dataSource;
    constructor(dataSource: DataSource);
}
