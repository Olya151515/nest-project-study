import { BaseAuthReqDto } from './base-auth.req.dto';
declare const SignInReqDto_base: import("@nestjs/common").Type<Pick<BaseAuthReqDto, "deviceId" | "email" | "password">>;
export declare class SignInReqDto extends SignInReqDto_base {
}
export declare class SignInDtoReq {
    email: string;
    password: string;
    deviceId: string;
}
export {};
