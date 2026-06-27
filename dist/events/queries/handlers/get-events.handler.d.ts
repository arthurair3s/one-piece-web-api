import { IQueryHandler } from '@nestjs/cqrs';
import { GetEventsQuery } from '../impl/get-events.query';
import { EventRead } from '../../models/event-read.model';
export declare class GetEventsHandler implements IQueryHandler<GetEventsQuery> {
    private readonly eventReadModel;
    constructor(eventReadModel: typeof EventRead);
    execute(query: GetEventsQuery): Promise<{
        rows: EventRead[];
        count: number;
    }>;
}
