import { IQueryHandler } from '@nestjs/cqrs';
import { GetProfilePermissionsQuery } from '../impl/get-profile-permissions.query';
import { Profile } from '../../models/profile.model';
import { Permission } from '../../../permissions/models/permission.model';
export declare class GetProfilePermissionsHandler implements IQueryHandler<GetProfilePermissionsQuery> {
    private readonly profileModel;
    constructor(profileModel: typeof Profile);
    execute(query: GetProfilePermissionsQuery): Promise<Permission[]>;
}
