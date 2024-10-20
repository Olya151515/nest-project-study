import { Injectable } from '@nestjs/common';

import { CommentsService } from '../../comments/services/comments.service';
import { UsersService } from '../../users/services/users.service';
import { CreateArticleDto } from '../models/dto/res/create-article.dto';
import { UpdateArticleDto } from '../models/dto/res/update-article.dto';

@Injectable()
export class ArticlesService {
  constructor(
    private readonly userService: UsersService,
    private readonly commentService: CommentsService,
  ) {}
  create(createArticleDto: CreateArticleDto) {
    this.userService.checkAbilityToEditArticle('userId', 'articleI');
    return 'This action adds a new article';
  }

  findAll() {
    return `This action returns all articles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    this.commentService.removeAllCommentsForArticleId('id');
    return `This action removes a #${id} article`;
  }
}
