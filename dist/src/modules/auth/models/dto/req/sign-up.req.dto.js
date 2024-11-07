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
exports.SignUpDtoReq = exports.SignUpReqDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const base_auth_req_dto_1 = require("./base-auth.req.dto");
class SignUpReqDto extends (0, swagger_1.PickType)(base_auth_req_dto_1.BaseAuthReqDto, [
    'email',
    'password',
    'bio',
    'name',
    'deviceId',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.SignUpReqDto = SignUpReqDto;
class SignUpDtoReq {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, password: { required: true, type: () => String }, bio: { required: false, type: () => String }, name: { required: true, type: () => String }, deviceId: { required: true, type: () => String } };
    }
}
exports.SignUpDtoReq = SignUpDtoReq;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SignUpDtoReq.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDtoReq.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SignUpDtoReq.prototype, "bio", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDtoReq.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDtoReq.prototype, "deviceId", void 0);
//# sourceMappingURL=sign-up.req.dto.js.map