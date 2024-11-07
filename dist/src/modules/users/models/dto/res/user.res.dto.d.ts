import { UserID } from '../../../../../common/types/entity-ids.type';
import { UserBaseResDto } from './user-base.res.dto';
declare const UserResDto_base: import("@nestjs/common").Type<Pick<UserBaseResDto, "id" | "image" | "name" | "email" | "bio">>;
export declare class UserResDto extends UserResDto_base {
}
export declare class UserDtoRes {
    id: UserID;
    name: string;
    email: string;
    bio?: string;
    image?: string;
}
export {};
