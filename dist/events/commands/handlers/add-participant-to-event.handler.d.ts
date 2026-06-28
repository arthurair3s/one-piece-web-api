import { ICommandHandler } from '@nestjs/cqrs';
import { AddParticipantToEventCommand } from '../impl/add-participant-to-event.command';
import { Event } from '../../models/event.model';
import { EventParticipant } from '../../models/event-participant.model';
import { CharacterVersion } from '../../../character-versions/models/character-version.model';
export declare class AddParticipantToEventHandler implements ICommandHandler<AddParticipantToEventCommand> {
    private readonly eventModel;
    private readonly characterVersionModel;
    private readonly eventParticipantModel;
    constructor(eventModel: typeof Event, characterVersionModel: typeof CharacterVersion, eventParticipantModel: typeof EventParticipant);
    execute(command: AddParticipantToEventCommand): Promise<EventParticipant>;
}
