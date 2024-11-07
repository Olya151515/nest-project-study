"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryModule = void 0;
const common_1 = require("@nestjs/common");
const article_repository_1 = require("./services/article.repository");
const comment_repository_1 = require("./services/comment.repository");
const follow_repository_1 = require("./services/follow.repository");
const like_repository_1 = require("./services/like.repository");
const refresh_token_repository_1 = require("./services/refresh-token.repository");
const tag_repository_1 = require("./services/tag.repository");
const user_repository_1 = require("./services/user.repository");
const repositories = [
    user_repository_1.UserRepository,
    article_repository_1.ArticleRepository,
    tag_repository_1.TagRepository,
    like_repository_1.LikeRepository,
    refresh_token_repository_1.RefreshTokenRepository,
    comment_repository_1.CommentRepository,
    follow_repository_1.FollowRepository,
];
let RepositoryModule = class RepositoryModule {
};
exports.RepositoryModule = RepositoryModule;
exports.RepositoryModule = RepositoryModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [...repositories],
        exports: [...repositories],
    })
], RepositoryModule);
//# sourceMappingURL=repository.module.js.map