"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserShorResDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const user_base_res_dto_1 = require("./user-base.res.dto");
class UserShorResDto extends (0, swagger_1.PickType)(user_base_res_dto_1.UserBaseResDto, ['id', 'name']) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UserShorResDto = UserShorResDto;
//# sourceMappingURL=user-short.res.dto.js.map