import { UserID } from '../../../../../common/types/entity-ids.type';
export declare class UserBaseResDto {
    id: UserID;
    name: string;
    email: string;
    bio?: string;
    image?: string;
}
