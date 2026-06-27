import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateProfileDto } from './dtos/create-profile.dto';
import { ProfileFilterDto } from './dtos/profile-filter.dto';
import { UpdateProfileDto } from './dtos/update-profile.dto';
import { UpdateProfilePermissionsDto } from './dtos/update-profile-permissions.dto';
export declare class ProfilesService {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    create(data: CreateProfileDto): Promise<any>;
    updatePermissions(id: number, data: UpdateProfilePermissionsDto): Promise<any>;
    findAll(filters: ProfileFilterDto): Promise<any>;
    findOne(id: number): Promise<any>;
    getPermissions(id: number): Promise<any>;
    update(id: number, data: UpdateProfileDto): Promise<any>;
    remove(id: number): Promise<any>;
}
