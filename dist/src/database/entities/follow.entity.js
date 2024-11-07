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
exports.FollowEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const table_name_enum_1 = require("./enums/table-name.enum");
const user_entity_1 = require("./user.entity");
let FollowEntity = class FollowEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Object }, created: { required: true, type: () => Date }, follower_id: { required: true, type: () => Object }, follower: { required: false, type: () => require("./user.entity").UserEntity }, following_id: { required: true, type: () => Object }, following: { required: false, type: () => require("./user.entity").UserEntity } };
    }
};
exports.FollowEntity = FollowEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FollowEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FollowEntity.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FollowEntity.prototype, "follower_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (entity) => entity.followers),
    (0, typeorm_1.JoinColumn)({ name: 'follower_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], FollowEntity.prototype, "follower", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FollowEntity.prototype, "following_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (entity) => entity.followings),
    (0, typeorm_1.JoinColumn)({ name: 'following_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], FollowEntity.prototype, "following", void 0);
exports.FollowEntity = FollowEntity = __decorate([
    (0, typeorm_1.Entity)(table_name_enum_1.TableNameEnum.FOLLOW)
], FollowEntity);
//# sourceMappingURL=follow.entity.js.map