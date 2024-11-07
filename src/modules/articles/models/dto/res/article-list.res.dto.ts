import { ListArticleQueryDto } from '../req/list-article.query.dto';
import { ArticleResDto } from './base-article.res.dto';

export class ArticleListResDto extends ListArticleQueryDto {
  data: ArticleResDto[];
  total: number;
}
