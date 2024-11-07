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
exports.UserDtoRes = exports.UserResDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const user_base_res_dto_1 = require("./user-base.res.dto");
class UserResDto extends (0, swagger_1.PickType)(user_base_res_dto_1.UserBaseResDto, [
    'id',
    'name',
    'email',
    'bio',
    'image',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UserResDto = UserResDto;
class UserDtoRes {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Object }, name: { required: true, type: () => String }, email: { required: true, type: () => String }, bio: { required: false, type: () => String }, image: { required: false, type: () => String } };
    }
}
exports.UserDtoRes = UserDtoRes;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], UserDtoRes.prototype, "id", void 0);
//# sourceMappingURL=user.res.dto.js.map