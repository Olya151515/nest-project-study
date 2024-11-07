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
exports.TagEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const article_entity_1 = require("./article.entity");
const table_name_enum_1 = require("./enums/table-name.enum");
const create_update_model_1 = require("./models/create-update.model");
let TagEntity = class TagEntity extends create_update_model_1.CreateUpdateModel {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Object }, name: { required: true, type: () => String }, articles: { required: true, type: () => [require("./article.entity").ArticleEntity] }, articleCount: { required: false, type: () => Number } };
    }
};
exports.TagEntity = TagEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TagEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], TagEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => article_entity_1.ArticleEntity, (entity) => entity.tags),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], TagEntity.prototype, "articles", void 0);
__decorate([
    (0, typeorm_1.VirtualColumn)({ query: () => 'NULL' }),
    __metadata("design:type", Number)
], TagEntity.prototype, "articleCount", void 0);
exports.TagEntity = TagEntity = __decorate([
    (0, typeorm_1.Entity)(table_name_enum_1.TableNameEnum.TAGS)
], TagEntity);
//# sourceMappingURL=tag.entity.js.map