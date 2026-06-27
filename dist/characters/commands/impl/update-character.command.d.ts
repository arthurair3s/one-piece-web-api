import { UpdateCharacterDto } from '../../dtos/update-character.dto';
export declare class UpdateCharacterCommand {
    readonly id: number;
    readonly data: UpdateCharacterDto;
    constructor(id: number, data: UpdateCharacterDto);
}
