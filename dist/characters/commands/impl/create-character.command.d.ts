import { CreateCharacterDto } from '../../dtos/create-character.dto';
export declare class CreateCharacterCommand {
    readonly data: CreateCharacterDto;
    constructor(data: CreateCharacterDto);
}
