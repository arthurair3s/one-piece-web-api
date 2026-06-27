import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dtos/create-profile.dto';
import { ProfileFilterDto } from './dtos/profile-filter.dto';
import { UpdateProfileDto } from './dtos/update-profile.dto';
import { UpdateProfilePermissionsDto } from './dtos/update-profile-permissions.dto';
export declare class ProfilesController {
    private readonly profilesService;
    constructor(profilesService: ProfilesService);
    create(body: CreateProfileDto): Promise<any>;
    updatePermissions(id: number, body: UpdateProfilePermissionsDto): Promise<any>;
    findAll(params: ProfileFilterDto): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, body: UpdateProfileDto): Promise<any>;
    remove(id: number): Promise<any>;
}
