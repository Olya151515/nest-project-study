import { BaseUserReqDto } from '../../../../users/models/dto/req/base-user.req.dto';
declare const BaseAuthReqDto_base: import("@nestjs/common").Type<Pick<BaseUserReqDto, "image" | "name" | "email" | "password" | "bio">>;
export declare class BaseAuthReqDto extends BaseAuthReqDto_base {
    readonly deviceId: string;
}
export declare class BaseAuthDtoReq {
    email: string;
    password: string;
    bio: string;
    image: string;
    name: string;
    deviceId: string;
}
export {};
