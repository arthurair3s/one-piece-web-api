import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserFilterDto } from './dtos/user-filter.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
export declare class UsersService {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    create(data: CreateUserDto): Promise<any>;
    findAll(filters: UserFilterDto): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, data: UpdateUserDto): Promise<any>;
    remove(id: number): Promise<any>;
}
