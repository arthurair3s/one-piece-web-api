import { ICommandHandler } from '@nestjs/cqrs';
import { Permission } from '../../models/permission.model';
import { CreatePermissionCommand } from '../impl/create-permission.command';
export declare class CreatePermissionHandler implements ICommandHandler<CreatePermissionCommand> {
    private readonly permissionModel;
    constructor(permissionModel: typeof Permission);
    execute(command: CreatePermissionCommand): Promise<Permission>;
}
