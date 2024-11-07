import { RefreshTokenRepository } from '../../repository/services/refresh-token.repository';
import { UserRepository } from '../../repository/services/user.repository';
import { SignInDtoReq } from '../models/dto/req/sign-in.req.dto';
import { SignUpDtoReq } from '../models/dto/req/sign-up.req.dto';
import { AuthResDto } from '../models/dto/res/auth.res.dto';
import { ITokenPair } from '../models/interfaces/token-pair.interface';
import { IUserData } from '../models/interfaces/user-data.interface';
import { AuthCacheService } from './auth-cache-service';
import { TokenService } from './token.service';
export declare class AuthService {
    private readonly userRepository;
    private readonly tokenService;
    private readonly authCacheService;
    private readonly refreshTokenRepository;
    constructor(userRepository: UserRepository, tokenService: TokenService, authCacheService: AuthCacheService, refreshTokenRepository: RefreshTokenRepository);
    signUp(dto: SignUpDtoReq): Promise<AuthResDto>;
    signIn(dto: SignInDtoReq): Promise<AuthResDto>;
    signOut(userData: IUserData): Promise<void>;
    refresh(userData: IUserData): Promise<ITokenPair>;
    private isEmailNotExistOrThrow;
}
