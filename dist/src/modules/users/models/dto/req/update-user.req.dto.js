"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserReqDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const base_user_req_dto_1 = require("./base-user.req.dto");
class UpdateUserReqDto extends (0, swagger_1.PickType)(base_user_req_dto_1.BaseUserReqDto, [
    'name',
    'bio',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateUserReqDto = UpdateUserReqDto;
//# sourceMappingURL=update-user.req.dto.js.map