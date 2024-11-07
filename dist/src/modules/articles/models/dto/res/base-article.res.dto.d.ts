import { UserDtoRes } from '../../../../users/models/dto/res/user.res.dto';
export declare class ArticleResDto {
    id: string;
    title: string;
    description: string;
    body: string;
    created: Date;
    updated: Date;
    tags: string[];
    user?: UserDtoRes;
}
