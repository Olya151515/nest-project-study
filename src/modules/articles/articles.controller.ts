import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { ArticleID } from '../../common/types/entity-ids.type';
import { CurrentUser } from '../auth/decorators/current-user-decorator';
import { IUserData } from '../auth/models/interfaces/user-data.interface';
import { BaseArticleReqDto } from './models/dto/req/base-article.req.dto';
import { ListArticleQueryDto } from './models/dto/req/list-article.query.dto';
import { UpdateArticleDto } from './models/dto/req/update-article.req.dto';
import { ArticleListResDto } from './models/dto/res/article-list.res.dto';
import { ArticleResDto } from './models/dto/res/base-article.res.dto';
import { ArticlesMapper } from './services/article.mapper';
import { ArticlesService } from './services/articles.service';

@ApiBearerAuth()
@ApiTags('articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @Post()
  public async create(
    @CurrentUser() userData: IUserData,
    @Body() createArticleDto: BaseArticleReqDto,
  ): Promise<ArticleResDto> {
    const result = await this.articleService.create(userData, createArticleDto);
    return ArticlesMapper.toResDto(result);
  }
  @Get()
  public async findAll(
    @CurrentUser() userData: IUserData,
    @Query() query: ListArticleQueryDto,
  ): Promise<ArticleListResDto> {
    const [entities, total] = await this.articleService.findAll(
      userData,
      query,
    );
    return ArticlesMapper.toResDtoList(entities, total, query);
  }
  @Get(':articleId')
  public async findOne(
    @Param('articleId') articleId: ArticleID,
  ): Promise<ArticleResDto> {
    const result = await this.articleService.findOne(articleId);
    return ArticlesMapper.toResDto(result);
  }

  @Patch(':articleId')
  public async update(
    @CurrentUser() userData: IUserData,
    @Param('articleId') articleId: ArticleID,
    @Body() updateArticleDto: UpdateArticleDto,
  ): Promise<ArticleResDto> {
    const result = await this.articleService.update(
      userData,
      articleId,
      updateArticleDto,
    );
    return ArticlesMapper.toResDto(result);
  }
}
