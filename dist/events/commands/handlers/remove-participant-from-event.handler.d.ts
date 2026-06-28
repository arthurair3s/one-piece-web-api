import { ICommandHandler } from '@nestjs/cqrs';
import { RemoveParticipantFromEventCommand } from '../impl/remove-participant-from-event.command';
import { EventParticipant } from '../../models/event-participant.model';
export declare class RemoveParticipantFromEventHandler implements ICommandHandler<RemoveParticipantFromEventCommand> {
    private readonly eventParticipantModel;
    constructor(eventParticipantModel: typeof EventParticipant);
    execute(command: RemoveParticipantFromEventCommand): Promise<void>;
}
