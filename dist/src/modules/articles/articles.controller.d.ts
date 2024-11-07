import { ArticleID } from '../../common/types/entity-ids.type';
import { IUserData } from '../auth/models/interfaces/user-data.interface';
import { BaseArticleReqDto } from './models/dto/req/base-article.req.dto';
import { ListArticleQueryDto } from './models/dto/req/list-article.query.dto';
import { UpdateArticleDto } from './models/dto/req/update-article.req.dto';
import { ArticleListResDto } from './models/dto/res/article-list.res.dto';
import { ArticleResDto } from './models/dto/res/base-article.res.dto';
import { ArticlesService } from './services/articles.service';
export declare class ArticlesController {
    private readonly articleService;
    constructor(articleService: ArticlesService);
    create(userData: IUserData, createArticleDto: BaseArticleReqDto): Promise<ArticleResDto>;
    findAll(userData: IUserData, query: ListArticleQueryDto): Promise<ArticleListResDto>;
    findOne(articleId: ArticleID): Promise<ArticleResDto>;
    update(userData: IUserData, articleId: ArticleID, updateArticleDto: UpdateArticleDto): Promise<ArticleResDto>;
}
