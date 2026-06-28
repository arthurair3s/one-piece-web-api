import { ICommandHandler } from '@nestjs/cqrs';
import { DeleteCharacterCommand } from '../impl/delete-character.command';
import { Character } from '../../models/character.model';
import { CharacterVersion } from '../../../character-versions/models/character-version.model';
export declare class DeleteCharacterHandler implements ICommandHandler<DeleteCharacterCommand> {
    private readonly characterModel;
    private readonly characterVersionModel;
    constructor(characterModel: typeof Character, characterVersionModel: typeof CharacterVersion);
    execute(command: DeleteCharacterCommand): Promise<{
        success: boolean;
        message: string;
    }>;
}
