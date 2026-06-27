import { IQueryHandler } from '@nestjs/cqrs';
import { GetPermissionsQuery } from '../impl/get-permissions.query';
import { Permission } from '@/permissions/models/permission.model';
export declare class GetPermissionsHandler implements IQueryHandler<GetPermissionsQuery> {
    private readonly permissionModel;
    constructor(permissionModel: typeof Permission);
    execute(query: GetPermissionsQuery): Promise<{
        rows: Permission[];
        count: number;
    }>;
}
