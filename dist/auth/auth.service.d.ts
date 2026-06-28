import { JwtService } from '@nestjs/jwt';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { RegisterDto } from './dtos/register.dto';
export declare class AuthService {
    private readonly commandBus;
    private readonly queryBus;
    private readonly jwtService;
    constructor(commandBus: CommandBus, queryBus: QueryBus, jwtService: JwtService);
    register(data: RegisterDto): Promise<any>;
    validateUser(email: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        accessToken: string;
        user: {
            id: any;
            username: any;
            email: any;
            profile: any;
        };
    }>;
}
