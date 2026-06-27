import { ICommandHandler } from '@nestjs/cqrs';
import { UpdateCharacterCommand } from '../impl/update-character.command';
import { Character } from '../../models/character.model';
export declare class UpdateCharacterHandler implements ICommandHandler<UpdateCharacterCommand> {
    private readonly characterModel;
    constructor(characterModel: typeof Character);
    execute(command: UpdateCharacterCommand): Promise<Character>;
}
