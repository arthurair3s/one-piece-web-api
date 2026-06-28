import { CreateCharacterVersionDto } from '../../dtos/create-character-version.dto';
export declare class CreateCharacterVersionsBulkCommand {
    readonly data: CreateCharacterVersionDto[];
    constructor(data: CreateCharacterVersionDto[]);
}
