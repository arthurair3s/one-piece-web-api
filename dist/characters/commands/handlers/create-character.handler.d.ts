import { ICommandHandler } from '@nestjs/cqrs';
import { CreateCharacterCommand } from '../impl/create-character.command';
import { Character } from '../../models/character.model';
export declare class CreateCharacterHandler implements ICommandHandler<CreateCharacterCommand> {
    private readonly characterModel;
    constructor(characterModel: typeof Character);
    execute(command: CreateCharacterCommand): Promise<Character>;
}
