import { IQueryHandler } from '@nestjs/cqrs';
import { GetEventParticipantsQuery } from '../impl/get-event-participants.query';
import { EventRead } from '../../models/event-read.model';
import { CharacterVersionRead } from '../../../character-versions/models/character-version-read.model';
export declare class GetEventParticipantsHandler implements IQueryHandler<GetEventParticipantsQuery> {
    private readonly eventReadModel;
    constructor(eventReadModel: typeof EventRead);
    execute(query: GetEventParticipantsQuery): Promise<CharacterVersionRead[]>;
}
