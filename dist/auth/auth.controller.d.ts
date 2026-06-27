import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(body: RegisterDto): Promise<any>;
    login(req: any, loginDto: LoginDto): Promise<{
        accessToken: string;
        user: {
            id: any;
            username: any;
            email: any;
            profile: any;
        };
    }>;
}
