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
exports.ArticleRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const article_entity_1 = require("../../../database/entities/article.entity");
let ArticleRepository = class ArticleRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(article_entity_1.ArticleEntity, dataSource.manager);
        this.dataSource = dataSource;
    }
    async findAll(userData, query) {
        const qb = this.createQueryBuilder('article');
        qb.leftJoinAndSelect('article.tags', 'tag');
        qb.leftJoinAndSelect('article.user', 'user');
        if (query.search) {
            qb.andWhere('CONCAT(article.title, article.description) ILIKE :search');
            qb.setParameter('search', `%${query.search}%`);
        }
        if (query.tag) {
            qb.andWhere('tag.name = :tag', { tag: query.tag });
        }
        qb.take(query.limit);
        qb.skip(query.offset);
        return await qb.getManyAndCount();
    }
};
exports.ArticleRepository = ArticleRepository;
exports.ArticleRepository = ArticleRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], ArticleRepository);
//# sourceMappingURL=article.repository.js.map