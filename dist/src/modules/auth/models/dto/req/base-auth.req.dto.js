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
exports.BaseAuthDtoReq = exports.BaseAuthReqDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const base_user_req_dto_1 = require("../../../../users/models/dto/req/base-user.req.dto");
class BaseAuthReqDto extends (0, swagger_1.PickType)(base_user_req_dto_1.BaseUserReqDto, [
    'email',
    'password',
    'bio',
    'image',
    'name',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { deviceId: { required: true, type: () => String } };
    }
}
exports.BaseAuthReqDto = BaseAuthReqDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BaseAuthReqDto.prototype, "deviceId", void 0);
class BaseAuthDtoReq {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, password: { required: true, type: () => String }, bio: { required: true, type: () => String }, image: { required: true, type: () => String }, name: { required: true, type: () => String }, deviceId: { required: true, type: () => String } };
    }
}
exports.BaseAuthDtoReq = BaseAuthDtoReq;
//# sourceMappingURL=base-auth.req.dto.js.map