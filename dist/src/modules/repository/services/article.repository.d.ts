import { DataSource, Repository } from 'typeorm';
import { ArticleEntity } from '../../../database/entities/article.entity';
export declare class ArticleRepository extends Repository<ArticleEntity> {
    private readonly dataSource;
    constructor(dataSource: DataSource);
}
