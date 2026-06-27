import { ICommandHandler } from '@nestjs/cqrs';
import { CreateCharactersBulkCommand } from '../impl/create-characters-bulk.command';
import { Character } from '../../models/character.model';
export declare class CreateCharactersBulkHandler implements ICommandHandler<CreateCharactersBulkCommand> {
    private readonly characterModel;
    constructor(characterModel: typeof Character);
    execute(command: CreateCharactersBulkCommand): Promise<Character[]>;
}
