import { IQueryHandler } from '@nestjs/cqrs';
import { GetPermissionByIdQuery } from '../impl/get-permission-by-id.query';
import { Permission } from '@/permissions/models/permission.model';
export declare class GetPermissionByIdHandler implements IQueryHandler<GetPermissionByIdQuery> {
    private readonly permissionModel;
    constructor(permissionModel: typeof Permission);
    execute(query: GetPermissionByIdQuery): Promise<Permission>;
}
