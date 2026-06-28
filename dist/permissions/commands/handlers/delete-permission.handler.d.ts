import { ICommandHandler } from '@nestjs/cqrs';
import { DeletePermissionCommand } from '../impl/delete-permission.command';
import { Permission } from '@/permissions/models/permission.model';
export declare class DeletePermissionHandler implements ICommandHandler<DeletePermissionCommand> {
    private readonly permissionModel;
    constructor(permissionModel: typeof Permission);
    execute(command: DeletePermissionCommand): Promise<{
        success: boolean;
        message: string;
    }>;
}
