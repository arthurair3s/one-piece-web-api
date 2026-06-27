import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserFilterDto } from './dtos/user-filter.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(body: CreateUserDto): Promise<any>;
    findAll(params: UserFilterDto): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, body: UpdateUserDto): Promise<any>;
    remove(id: number): Promise<any>;
}
