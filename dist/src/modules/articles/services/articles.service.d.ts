import { ArticleID } from '../../../common/types/entity-ids.type';
import { ArticleEntity } from '../../../database/entities/article.entity';
import { IUserData } from '../../auth/models/interfaces/user-data.interface';
import { ArticleRepository } from '../../repository/services/article.repository';
import { TagRepository } from '../../repository/services/tag.repository';
import { BaseArticleReqDto } from '../models/dto/req/base-article.req.dto';
import { ListArticleQueryDto } from '../models/dto/req/list-article.query.dto';
import { UpdateArticleDto } from '../models/dto/req/update-article.req.dto';
export declare class ArticlesService {
    private readonly articleRepository;
    private readonly tagRepository;
    constructor(articleRepository: ArticleRepository, tagRepository: TagRepository);
    create(userData: IUserData, dto: BaseArticleReqDto): Promise<ArticleEntity>;
    findAll(userData: IUserData, query: ListArticleQueryDto): Promise<[ArticleEntity[], number]>;
    findOne(articleId: ArticleID): Promise<ArticleEntity>;
    update(userData: IUserData, articleId: ArticleID, updateArticleDto: UpdateArticleDto): Promise<ArticleEntity>;
    private createTags;
}
