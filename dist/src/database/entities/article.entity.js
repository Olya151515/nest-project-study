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
exports.ArticleEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const comment_entity_1 = require("./comment.entity");
const table_name_enum_1 = require("./enums/table-name.enum");
const like_entity_1 = require("./like.entity");
const create_update_model_1 = require("./models/create-update.model");
const tag_entity_1 = require("./tag.entity");
const user_entity_1 = require("./user.entity");
let ArticleEntity = class ArticleEntity extends create_update_model_1.CreateUpdateModel {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Object }, title: { required: true, type: () => String }, description: { required: false, type: () => String }, body: { required: false, type: () => String }, likes: { required: true, type: () => [require("./like.entity").LikeEntity] }, comments: { required: true, type: () => [require("./comment.entity").CommentEntity] }, user_id: { required: true, type: () => Object }, user: { required: false, type: () => require("./user.entity").UserEntity }, tags: { required: true, type: () => [require("./tag.entity").TagEntity] } };
    }
};
exports.ArticleEntity = ArticleEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ArticleEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], ArticleEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "body", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => like_entity_1.LikeEntity, (entity) => entity.article),
    __metadata("design:type", Array)
], ArticleEntity.prototype, "likes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.CommentEntity, (entity) => entity.article),
    __metadata("design:type", Array)
], ArticleEntity.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ArticleEntity.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (entity) => entity.articles, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], ArticleEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => tag_entity_1.TagEntity, (entity) => entity.articles),
    __metadata("design:type", Array)
], ArticleEntity.prototype, "tags", void 0);
exports.ArticleEntity = ArticleEntity = __decorate([
    (0, typeorm_1.Entity)(table_name_enum_1.TableNameEnum.ARTICLES)
], ArticleEntity);
//# sourceMappingURL=article.entity.js.map