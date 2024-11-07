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
exports.UserEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const article_entity_1 = require("./article.entity");
const comment_entity_1 = require("./comment.entity");
const table_name_enum_1 = require("./enums/table-name.enum");
const follow_entity_1 = require("./follow.entity");
const like_entity_1 = require("./like.entity");
const create_update_model_1 = require("./models/create-update.model");
const refresh_token_entity_1 = require("./refresh-token.entity");
let UserEntity = class UserEntity extends create_update_model_1.CreateUpdateModel {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Object }, name: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String }, isActive: { required: true, type: () => Boolean }, bio: { required: true, type: () => String }, image: { required: true, type: () => String }, deleted: { required: false, type: () => Date }, refreshTokens: { required: false, type: () => [require("./refresh-token.entity").RefreshTokenEntity] }, articles: { required: false, type: () => [require("./article.entity").ArticleEntity] }, comments: { required: false, type: () => [require("./comment.entity").CommentEntity] }, likes: { required: false, type: () => [require("./like.entity").LikeEntity] }, followers: { required: false, type: () => [require("./follow.entity").FollowEntity] }, followings: { required: false, type: () => [require("./follow.entity").FollowEntity] } };
    }
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { default: true }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "bio", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { nullable: true }),
    __metadata("design:type", Date)
], UserEntity.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => refresh_token_entity_1.RefreshTokenEntity, (entity) => entity.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "refreshTokens", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => article_entity_1.ArticleEntity, (entity) => entity.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "articles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.CommentEntity, (entity) => entity.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => like_entity_1.LikeEntity, (entity) => entity.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "likes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => follow_entity_1.FollowEntity, (entity) => entity.follower),
    __metadata("design:type", Array)
], UserEntity.prototype, "followers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => follow_entity_1.FollowEntity, (entity) => entity.following),
    __metadata("design:type", Array)
], UserEntity.prototype, "followings", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)(table_name_enum_1.TableNameEnum.USERS)
], UserEntity);
//# sourceMappingURL=user.entity.js.map