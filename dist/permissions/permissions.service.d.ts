import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreatePermissionDto } from './dtos/create-permission.dto';
import { UpdatePermissionDto } from './dtos/update-permission.dto';
import { PermissionFilterDto } from './dtos/filter-permission.dto';
export declare class PermissionsService {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    create(data: CreatePermissionDto): Promise<any>;
    findAll(filters: PermissionFilterDto): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, data: UpdatePermissionDto): Promise<any>;
    remove(id: number): Promise<any>;
}
