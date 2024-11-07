"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateArticleDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const base_article_req_dto_1 = require("./base-article.req.dto");
class CreateArticleDto extends (0, swagger_1.PickType)(base_article_req_dto_1.BaseArticleReqDto, [
    'title',
    'description',
    'body',
    'tags',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateArticleDto = CreateArticleDto;
//# sourceMappingURL=create-article.req.dto.js.map