import { CreateCommentDto } from './models/dto/res/create-comment.dto';
import { CommentsService } from './services/comments.service';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(createCommentDto: CreateCommentDto): string;
    findAll(): string;
}
