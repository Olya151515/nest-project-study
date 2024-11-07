import { CreateCommentDto } from '../models/dto/res/create-comment.dto';
export declare class CommentsService {
    create(createCommentDto: CreateCommentDto): string;
    findAll(): string;
    removeAllCommentsForArticleId(articleId: string): Promise<void>;
}
