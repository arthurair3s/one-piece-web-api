import { ICommandHandler } from '@nestjs/cqrs';
import { Sequelize } from 'sequelize-typescript';
import { UpdateProfilePermissionsCommand } from '../impl/update-profile-permissions.command';
import { Profile } from '../../models/profile.model';
import { ProfilePermission } from '../../../permissions/models/profile-permission.model';
export declare class UpdateProfilePermissionsHandler implements ICommandHandler<UpdateProfilePermissionsCommand> {
    private readonly sequelize;
    private readonly profileModel;
    private readonly profilePermissionModel;
    constructor(sequelize: Sequelize, profileModel: typeof Profile, profilePermissionModel: typeof ProfilePermission);
    execute(command: UpdateProfilePermissionsCommand): Promise<{
        success: boolean;
        message: string;
        count: number;
    }>;
}
