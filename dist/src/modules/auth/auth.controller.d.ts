import { SignInDtoReq } from './models/dto/req/sign-in.req.dto';
import { SignUpDtoReq } from './models/dto/req/sign-up.req.dto';
import { AuthResDto } from './models/dto/res/auth.res.dto';
import { ITokenPair } from './models/interfaces/token-pair.interface';
import { IUserData } from './models/interfaces/user-data.interface';
import { AuthService } from './services/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(dto: SignUpDtoReq): Promise<AuthResDto>;
    signIn(dto: SignInDtoReq): Promise<AuthResDto>;
    signOut(userData: IUserData): Promise<void>;
    refresh(userData: IUserData): Promise<ITokenPair>;
}
