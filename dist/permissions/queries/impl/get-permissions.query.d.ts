import { PermissionFilterDto } from '@/permissions/dtos/filter-permission.dto';
export declare class GetPermissionsQuery {
    readonly filters: PermissionFilterDto;
    constructor(filters: PermissionFilterDto);
}
