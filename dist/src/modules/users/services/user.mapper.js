"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
class UserMapper {
    static toResDto(user) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            bio: user.bio,
            image: user.image,
        };
    }
    static toIUserData(user, payload) {
        return {
            userId: user.id,
            deviceId: payload.deviceId,
            email: user.email,
        };
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=user.mapper.js.map