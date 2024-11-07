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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const current_user_decorator_1 = require("../auth/decorators/current-user-decorator");
const base_article_req_dto_1 = require("./models/dto/req/base-article.req.dto");
const list_article_query_dto_1 = require("./models/dto/req/list-article.query.dto");
const update_article_req_dto_1 = require("./models/dto/req/update-article.req.dto");
const article_mapper_1 = require("./services/article.mapper");
const articles_service_1 = require("./services/articles.service");
let ArticlesController = class ArticlesController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    async create(userData, createArticleDto) {
        const result = await this.articleService.create(userData, createArticleDto);
        return article_mapper_1.ArticlesMapper.toResDto(result);
    }
    async findAll(userData, query) {
        const [entities, total] = await this.articleService.findAll(userData, query);
        return article_mapper_1.ArticlesMapper.toResDtoList(entities, total, query);
    }
    async findOne(articleId) {
        const result = await this.articleService.findOne(articleId);
        return article_mapper_1.ArticlesMapper.toResDto(result);
    }
    async update(userData, articleId, updateArticleDto) {
        const result = await this.articleService.update(userData, articleId, updateArticleDto);
        return article_mapper_1.ArticlesMapper.toResDto(result);
    }
};
exports.ArticlesController = ArticlesController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./models/dto/res/base-article.res.dto").ArticleResDto }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, base_article_req_dto_1.BaseArticleReqDto]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./models/dto/res/article-list.res.dto").ArticleListResDto }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, list_article_query_dto_1.ListArticleQueryDto]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':articleId'),
    openapi.ApiResponse({ status: 200, type: require("./models/dto/res/base-article.res.dto").ArticleResDto }),
    __param(0, (0, common_1.Param)('articleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':articleId'),
    openapi.ApiResponse({ status: 200, type: require("./models/dto/res/base-article.res.dto").ArticleResDto }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('articleId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_article_req_dto_1.UpdateArticleDto]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "update", null);
exports.ArticlesController = ArticlesController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('articles'),
    (0, common_1.Controller)('articles'),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService])
], ArticlesController);
//# sourceMappingURL=articles.controller.js.map