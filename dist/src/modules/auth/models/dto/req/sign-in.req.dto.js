"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInDtoReq = exports.SignInReqDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const base_auth_req_dto_1 = require("./base-auth.req.dto");
class SignInReqDto extends (0, swagger_1.PickType)(base_auth_req_dto_1.BaseAuthReqDto, [
    'email',
    'password',
    'deviceId',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.SignInReqDto = SignInReqDto;
class SignInDtoReq {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, password: { required: true, type: () => String, minLength: 0, maxLength: 300, pattern: "/^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%_*#?&])[A-Za-z\\d@$_!%*#?&]{8,}$/" }, deviceId: { required: true, type: () => String } };
    }
}
exports.SignInDtoReq = SignInDtoReq;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SignInDtoReq.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123qwe!@#QWE' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 300),
    (0, class_validator_1.Matches)(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%_*#?&])[A-Za-z\d@$_!%*#?&]{8,}$/),
    __metadata("design:type", String)
], SignInDtoReq.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignInDtoReq.prototype, "deviceId", void 0);
//# sourceMappingURL=sign-in.req.dto.js.map