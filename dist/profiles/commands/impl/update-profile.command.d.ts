import { UpdateProfileDto } from '../../dtos/update-profile.dto';
export declare class UpdateProfileCommand {
    readonly id: number;
    readonly data: UpdateProfileDto;
    constructor(id: number, data: UpdateProfileDto);
}
