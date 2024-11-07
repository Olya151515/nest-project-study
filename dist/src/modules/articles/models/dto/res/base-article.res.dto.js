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
exports.ArticleResDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class ArticleResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, title: { required: true, type: () => String }, description: { required: true, type: () => String }, body: { required: true, type: () => String }, created: { required: true, type: () => Date }, updated: { required: true, type: () => Date }, tags: { required: true, type: () => [String] }, user: { required: false, type: () => require("../../../../users/models/dto/res/user.res.dto").UserDtoRes } };
    }
}
exports.ArticleResDto = ArticleResDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '796cea24-a328-4463-a5e1-85a779e4780f',
        description: 'Article ID',
    }),
    __metadata("design:type", String)
], ArticleResDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Article Title',
        description: 'Article Title',
    }),
    __metadata("design:type", String)
], ArticleResDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Article Description',
        description: 'Article Description',
    }),
    __metadata("design:type", String)
], ArticleResDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Article Body',
        description: 'Article Body',
    }),
    __metadata("design:type", String)
], ArticleResDto.prototype, "body", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2021-09-29T10:00:00.000Z',
        description: 'Article Created Date',
    }),
    __metadata("design:type", Date)
], ArticleResDto.prototype, "created", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2021-09-29T10:00:00.000Z',
        description: 'Article Updated Date',
    }),
    __metadata("design:type", Date)
], ArticleResDto.prototype, "updated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['tag1', 'tag2'],
        description: 'Article Tags',
    }),
    __metadata("design:type", Array)
], ArticleResDto.prototype, "tags", void 0);
//# sourceMappingURL=base-article.res.dto.js.map