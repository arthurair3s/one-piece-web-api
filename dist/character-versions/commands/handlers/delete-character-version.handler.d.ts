import { ICommandHandler } from '@nestjs/cqrs';
import { DeleteCharacterVersionCommand } from '../impl/delete-character-version.command';
import { CharacterVersion } from '../../models/character-version.model';
export declare class DeleteCharacterVersionHandler implements ICommandHandler<DeleteCharacterVersionCommand> {
    private readonly characterVersionModel;
    constructor(characterVersionModel: typeof CharacterVersion);
    execute(command: DeleteCharacterVersionCommand): Promise<{
        success: boolean;
        message: string;
    }>;
}
