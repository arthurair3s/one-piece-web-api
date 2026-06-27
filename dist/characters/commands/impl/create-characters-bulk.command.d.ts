import { CreateCharacterDto } from '../../dtos/create-character.dto';
export declare class CreateCharactersBulkCommand {
    readonly data: CreateCharacterDto[];
    constructor(data: CreateCharacterDto[]);
}
