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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const follow_repository_1 = require("../../repository/services/follow.repository");
const refresh_token_repository_1 = require("../../repository/services/refresh-token.repository");
const user_repository_1 = require("../../repository/services/user.repository");
let UsersService = class UsersService {
    constructor(configService, userRepository, followRepository, refreshTokenRepository) {
        this.configService = configService;
        this.userRepository = userRepository;
        this.followRepository = followRepository;
        this.refreshTokenRepository = refreshTokenRepository;
    }
    async findMe(userData) {
        return await this.userRepository.findOneBy({ id: userData.userId });
    }
    async updateMe(userData, dto) {
        const user = await this.userRepository.findOneBy({ id: userData.userId });
        this.userRepository.merge(user, dto);
        return await this.userRepository.save(user);
    }
    async removeMe(userData) {
        await this.userRepository.update({ id: userData.userId }, { deleted: new Date() });
        await this.refreshTokenRepository.delete({ user_id: userData.userId });
    }
    async findOne(userId) {
        return await this.userRepository.findOneBy({ id: userId });
    }
    async follow(userData, userId) {
        if (userData.userId == userId) {
            throw new common_1.ConflictException('You can not follow yourself');
        }
        await this.isUserExist(userId);
        const follow = await this.followRepository.findOneBy({
            follower_id: userData.userId,
            following_id: userId,
        });
        if (follow) {
            throw new common_1.ConflictException('You already follow this user');
        }
        await this.followRepository.save(this.followRepository.create({
            follower_id: userData.userId,
            following_id: userId,
        }));
    }
    async unfollow(userData, userId) {
        if (userData.userId == userId) {
            throw new common_1.ConflictException('You can not unfollow yourself');
        }
        await this.isUserExist(userId);
        const follow = await this.followRepository.findOneBy({
            follower_id: userData.userId,
            following_id: userId,
        });
        if (!follow) {
            throw new common_1.ConflictException('You are not follow this user');
        }
        await this.followRepository.delete({
            follower_id: userData.userId,
            following_id: userId,
        });
    }
    async isUserExist(userId) {
        const user = await this.userRepository.findOneBy({ id: userId });
        if (!user) {
            throw new common_1.ConflictException('User not found');
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        user_repository_1.UserRepository,
        follow_repository_1.FollowRepository,
        refresh_token_repository_1.RefreshTokenRepository])
], UsersService);
//# sourceMappingURL=users.service.js.map