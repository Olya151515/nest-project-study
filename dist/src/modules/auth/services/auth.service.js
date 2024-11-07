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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const refresh_token_repository_1 = require("../../repository/services/refresh-token.repository");
const user_repository_1 = require("../../repository/services/user.repository");
const user_mapper_1 = require("../../users/services/user.mapper");
const auth_cache_service_1 = require("./auth-cache-service");
const token_service_1 = require("./token.service");
let AuthService = class AuthService {
    constructor(userRepository, tokenService, authCacheService, refreshTokenRepository) {
        this.userRepository = userRepository;
        this.tokenService = tokenService;
        this.authCacheService = authCacheService;
        this.refreshTokenRepository = refreshTokenRepository;
    }
    async signUp(dto) {
        await this.isEmailNotExistOrThrow(dto.email);
        const passwordHash = await bcrypt.hash(dto.password, 10);
        const userData = { ...dto, password: passwordHash };
        const user = await this.userRepository.save(this.userRepository.create(userData));
        const tokens = await this.tokenService.generateAuthTokens({
            userId: user.id,
            deviceId: dto.deviceId,
        });
        await this.authCacheService.saveToken(tokens.accessToken, user.id, dto.deviceId);
        await this.refreshTokenRepository.save(this.refreshTokenRepository.create({
            user_id: user.id,
            deviceId: dto.deviceId,
            refreshToken: tokens.refreshToken,
        }));
        return { user: user_mapper_1.UserMapper.toResDto(user), tokens };
    }
    async signIn(dto) {
        const user = await this.userRepository.findOne({
            where: { email: dto.email },
            select: ['id', 'password'],
        });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        const isPasswordValid = await bcrypt.compare(dto.password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException();
        }
        const tokens = await this.tokenService.generateAuthTokens({
            userId: user.id,
            deviceId: dto.deviceId,
        });
        await this.authCacheService.saveToken(tokens.accessToken, user.id, dto.deviceId);
        await this.refreshTokenRepository.save(this.refreshTokenRepository.create({
            user_id: user.id,
            deviceId: dto.deviceId,
            refreshToken: tokens.refreshToken,
        }));
        const userEntity = await this.userRepository.findOneBy({ id: user.id });
        return { user: user_mapper_1.UserMapper.toResDto(userEntity), tokens };
    }
    async signOut(userData) {
        await Promise.all([
            await this.authCacheService.deleteToken(userData.userId, userData.deviceId),
            await this.refreshTokenRepository.delete({
                user_id: userData.userId,
                deviceId: userData.deviceId,
            }),
        ]);
    }
    async refresh(userData) {
        await Promise.all([
            await this.authCacheService.deleteToken(userData.userId, userData.deviceId),
            await this.refreshTokenRepository.delete({
                user_id: userData.userId,
                deviceId: userData.deviceId,
            }),
        ]);
        const tokens = await this.tokenService.generateAuthTokens({
            userId: userData.userId,
            deviceId: userData.deviceId,
        });
        await this.authCacheService.saveToken(tokens.accessToken, userData.userId, userData.deviceId);
        await this.refreshTokenRepository.save(this.refreshTokenRepository.create({
            user_id: userData.userId,
            deviceId: userData.deviceId,
            refreshToken: tokens.refreshToken,
        }));
        return tokens;
    }
    async isEmailNotExistOrThrow(email) {
        const user = await this.userRepository.findOneBy({ email });
        if (user) {
            throw new Error('Email already exists');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        token_service_1.TokenService,
        auth_cache_service_1.AuthCacheService,
        refresh_token_repository_1.RefreshTokenRepository])
], AuthService);
//# sourceMappingURL=auth.service.js.map