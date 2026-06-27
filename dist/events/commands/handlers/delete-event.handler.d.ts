import { ICommandHandler } from '@nestjs/cqrs';
import { DeleteEventCommand } from '../impl/delete-event.command';
import { Event } from '../../models/event.model';
import { EventParticipant } from '../../models/event-participant.model';
import { Sequelize } from 'sequelize-typescript';
export declare class DeleteEventHandler implements ICommandHandler<DeleteEventCommand> {
    private readonly eventModel;
    private readonly eventParticipantModel;
    private readonly sequelize;
    constructor(eventModel: typeof Event, eventParticipantModel: typeof EventParticipant, sequelize: Sequelize);
    execute(command: DeleteEventCommand): Promise<void>;
}
