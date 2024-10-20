import { Injectable } from '@nestjs/common';

import { CreateCommentDto } from '../models/dto/res/create-comment.dto';
import { UpdateCommentDto } from '../models/dto/res/update-comment.dto';

@Injectable()
export class CommentsService {
  create(createCommentDto: CreateCommentDto) {
    return 'This action adds a new comment';
  }

  findAll() {
    return `This action returns all comments`;
  }
  public async removeAllCommentsForArticleId(articleId: string) {}
}
