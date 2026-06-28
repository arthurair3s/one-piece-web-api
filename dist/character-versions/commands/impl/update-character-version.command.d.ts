import { UpdateCharacterVersionDto } from '../../dtos/update-character-version.dto';
export declare class UpdateCharacterVersionCommand {
    readonly id: number;
    readonly data: UpdateCharacterVersionDto;
    constructor(id: number, data: UpdateCharacterVersionDto);
}
