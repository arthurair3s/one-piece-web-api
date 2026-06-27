import { UpdateProfilePermissionsDto } from "../../dtos/update-profile-permissions.dto";
export declare class UpdateProfilePermissionsCommand {
    readonly profileId: number;
    readonly data: UpdateProfilePermissionsDto;
    constructor(profileId: number, data: UpdateProfilePermissionsDto);
}
