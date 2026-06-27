import { ICommandHandler } from '@nestjs/cqrs';
import { UpdatePermissionCommand } from '../impl/update-permission.command';
import { Permission } from '@/permissions/models/permission.model';
export declare class UpdatePermissionHandler implements ICommandHandler<UpdatePermissionCommand> {
    private readonly permissionModel;
    constructor(permissionModel: typeof Permission);
    execute(command: UpdatePermissionCommand): Promise<Permission>;
}
