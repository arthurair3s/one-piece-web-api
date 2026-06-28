import { IQueryHandler } from '@nestjs/cqrs';
import { GetEventByIdQuery } from '../impl/get-event-by-id.query';
import { EventRead } from '../../models/event-read.model';
export declare class GetEventByIdHandler implements IQueryHandler<GetEventByIdQuery> {
    private readonly eventReadModel;
    constructor(eventReadModel: typeof EventRead);
    execute(query: GetEventByIdQuery): Promise<any>;
}
