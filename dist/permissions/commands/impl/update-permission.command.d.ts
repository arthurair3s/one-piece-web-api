import { UpdatePermissionDto } from "../../dtos/update-permission.dto";
export declare class UpdatePermissionCommand {
    readonly id: number;
    readonly data: UpdatePermissionDto;
    constructor(id: number, data: UpdatePermissionDto);
}
