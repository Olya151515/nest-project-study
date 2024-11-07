"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const global_exception_filter_1 = require("./common/filters/global-exception.filter");
const configuration_1 = require("./configs/configuration");
const articles_module_1 = require("./modules/articles/articles.module");
const auth_module_1 = require("./modules/auth/auth.module");
const comments_module_1 = require("./modules/comments/comments.module");
const logger_module_1 = require("./modules/logger/logger.module");
const postgres_module_1 = require("./modules/postgres/postgres.module");
const redis_module_1 = require("./modules/redis/redis.module");
const repository_module_1 = require("./modules/repository/repository.module");
const tag_module_1 = require("./modules/tags/tag.module");
const users_module_1 = require("./modules/users/users.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
                isGlobal: true,
            }),
            repository_module_1.RepositoryModule,
            logger_module_1.LoggerModule,
            postgres_module_1.PostgresModule,
            auth_module_1.AuthModule,
            redis_module_1.RedisModule,
            users_module_1.UsersModule,
            articles_module_1.ArticlesModule,
            comments_module_1.CommentsModule,
            tag_module_1.TagModule,
        ],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: global_exception_filter_1.GlobalExceptionFilter,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map