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
exports.TagRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const tag_entity_1 = require("../../../database/entities/tag.entity");
let TagRepository = class TagRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(tag_entity_1.TagEntity, dataSource.manager);
        this.dataSource = dataSource;
    }
    async getPopular() {
        const qb = await this.createQueryBuilder('tag');
        qb.leftJoin('tag.articles', 'article');
        qb.addSelect('COUNT(article.id)', 'tag_articleCount');
        qb.groupBy('tag.id');
        qb.orderBy('"tag_articleCount"', 'DESC');
        qb.limit(10);
        return await qb.getMany();
    }
};
exports.TagRepository = TagRepository;
exports.TagRepository = TagRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], TagRepository);
//# sourceMappingURL=tag.repository.js.map