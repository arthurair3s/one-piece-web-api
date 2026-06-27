import { ICommandHandler } from '@nestjs/cqrs';
import { DeleteCharacterCommand } from '../impl/delete-character.command';
import { Character } from '../../models/character.model';
export declare class DeleteCharacterHandler implements ICommandHandler<DeleteCharacterCommand> {
    private readonly characterModel;
    constructor(characterModel: typeof Character);
    execute(command: DeleteCharacterCommand): Promise<{
        success: boolean;
        message: string;
    }>;
}
