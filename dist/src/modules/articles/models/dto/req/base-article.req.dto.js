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
exports.BaseArticleReqDto = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const transformer_helper_1 = require("../../../../../common/helpers/transformer.helper");
class BaseArticleReqDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String, minLength: 3, maxLength: 50 }, description: { required: true, type: () => String, minLength: 0, maxLength: 300 }, body: { required: true, type: () => String, minLength: 0, maxLength: 3000 }, tags: { required: true, type: () => [String], minLength: 3, maxLength: 30 } };
    }
}
exports.BaseArticleReqDto = BaseArticleReqDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 50),
    (0, class_transformer_1.Transform)(transformer_helper_1.TransformerHelper.trim),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], BaseArticleReqDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 300),
    (0, class_transformer_1.Transform)(transformer_helper_1.TransformerHelper.trim),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], BaseArticleReqDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 3000),
    (0, class_transformer_1.Transform)(transformer_helper_1.TransformerHelper.trim),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], BaseArticleReqDto.prototype, "body", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.Length)(3, 30, { each: true }),
    (0, class_validator_1.ArrayMaxSize)(5),
    (0, class_transformer_1.Transform)(transformer_helper_1.TransformerHelper.trimArray),
    (0, class_transformer_1.Transform)(transformer_helper_1.TransformerHelper.uniqueItems),
    (0, class_transformer_1.Transform)(transformer_helper_1.TransformerHelper.toLowerCaseArray),
    __metadata("design:type", Array)
], BaseArticleReqDto.prototype, "tags", void 0);
//# sourceMappingURL=base-article.req.dto.js.map