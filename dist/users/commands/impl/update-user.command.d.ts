import { UpdateUserDto } from '../../dtos/update-user.dto';
export declare class UpdateUserCommand {
    readonly id: number;
    readonly data: UpdateUserDto;
    constructor(id: number, data: UpdateUserDto);
}
