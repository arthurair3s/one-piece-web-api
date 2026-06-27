import { ICommandHandler } from '@nestjs/cqrs';
import { Sequelize } from 'sequelize-typescript';
import { DeleteCharacterVersionCommand } from '../impl/delete-character-version.command';
import { CharacterVersion } from '../../models/character-version.model';
import { ArcCharacterVersion } from '../../../arcs/models/arc-character-version.model';
import { EventParticipant } from '../../../events/models/event-participant.model';
export declare class DeleteCharacterVersionHandler implements ICommandHandler<DeleteCharacterVersionCommand> {
    private readonly characterVersionModel;
    private readonly arcCharacterVersionModel;
    private readonly eventParticipantModel;
    private readonly sequelize;
    constructor(characterVersionModel: typeof CharacterVersion, arcCharacterVersionModel: typeof ArcCharacterVersion, eventParticipantModel: typeof EventParticipant, sequelize: Sequelize);
    execute(command: DeleteCharacterVersionCommand): Promise<{
        success: boolean;
        message: string;
    }>;
}
