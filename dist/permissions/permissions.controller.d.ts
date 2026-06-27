import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dtos/create-permission.dto';
import { UpdatePermissionDto } from './dtos/update-permission.dto';
import { PermissionFilterDto } from './dtos/filter-permission.dto';
export declare class PermissionsController {
    private readonly permissionsService;
    constructor(permissionsService: PermissionsService);
    create(data: CreatePermissionDto): Promise<any>;
    findAll(filters: PermissionFilterDto): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, data: UpdatePermissionDto): Promise<any>;
    remove(id: number): Promise<any>;
}
