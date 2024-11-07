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
exports.ArticlesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const article_repository_1 = require("../../repository/services/article.repository");
const tag_repository_1 = require("../../repository/services/tag.repository");
let ArticlesService = class ArticlesService {
    constructor(articleRepository, tagRepository) {
        this.articleRepository = articleRepository;
        this.tagRepository = tagRepository;
    }
    async create(userData, dto) {
        const tags = await this.createTags(dto.tags);
        return await this.articleRepository.save(this.articleRepository.create({ ...dto, tags, user_id: userData.userId }));
    }
    async findOne(articleId) {
        return {};
    }
    async update(userData, articleId, updateArticleDto) {
        return {};
    }
    async createTags(tags) {
        if (!tags || !tags.length)
            return [];
        const entities = await this.tagRepository.findBy({ name: (0, typeorm_1.In)(tags) });
        const existingTags = entities.map((tag) => tag.name);
        const newTags = tags.filter((tag) => !existingTags.includes(tag));
        const newEntities = await this.tagRepository.save(newTags.map((tag) => this.tagRepository.create({ name: tag })));
        return [...entities, ...newEntities];
    }
};
exports.ArticlesService = ArticlesService;
exports.ArticlesService = ArticlesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [article_repository_1.ArticleRepository,
        tag_repository_1.TagRepository])
], ArticlesService);
//# sourceMappingURL=articles.service.js.map