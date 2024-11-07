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
exports.BaseUserReqDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const transformer_helper_1 = require("../../../../../common/helpers/transformer.helper");
class BaseUserReqDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: false, type: () => String, minLength: 3, maxLength: 50 }, bio: { required: false, type: () => String, minLength: 0, maxLength: 300 }, image: { required: false, type: () => String, minLength: 0, maxLength: 3000 }, email: { required: true, type: () => String, minLength: 0, maxLength: 300, pattern: "/^[^\\s@]+@([^\\s@.,]+\\.)+[^\\s@.,]{2,}$/" }, password: { required: true, type: () => String, minLength: 0, maxLength: 300, pattern: "/^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%_*#?&])[A-Za-z\\d@$_!%*#?&]{8,}$/" } };
    }
}
exports.BaseUserReqDto = BaseUserReqDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 50),
    (0, class_transformer_1.Transform)(transformer_helper_1.TransformerHelper.trim),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], BaseUserReqDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 300),
    __metadata("design:type", String)
], BaseUserReqDto.prototype, "bio", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 3000),
    __metadata("design:type", String)
], BaseUserReqDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test@gmail.com' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 300),
    (0, class_validator_1.Matches)(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/),
    __metadata("design:type", String)
], BaseUserReqDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123qwe!@#QWE' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 300),
    (0, class_validator_1.Matches)(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%_*#?&])[A-Za-z\d@$_!%*#?&]{8,}$/),
    __metadata("design:type", String)
], BaseUserReqDto.prototype, "password", void 0);
//# sourceMappingURL=base-user.req.dto.js.map