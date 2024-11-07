import { DataSource, Repository } from 'typeorm';
import { ArticleEntity } from '../../../database/entities/article.entity';
import { ListArticleQueryDto } from '../../articles/models/dto/req/list-article.query.dto';
import { IUserData } from '../../auth/models/interfaces/user-data.interface';
export declare class ArticleRepository extends Repository<ArticleEntity> {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    findAll(userData: IUserData, query: ListArticleQueryDto): Promise<[ArticleEntity[], number]>;
}
