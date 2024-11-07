import { BaseAuthReqDto } from './base-auth.req.dto';
declare const SignUpReqDto_base: import("@nestjs/common").Type<Pick<BaseAuthReqDto, "name" | "deviceId" | "email" | "password" | "bio">>;
export declare class SignUpReqDto extends SignUpReqDto_base {
}
export declare class SignUpDtoReq {
    email: string;
    password: string;
    bio?: string;
    name: string;
    deviceId: string;
}
export {};
