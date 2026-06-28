import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateEventDto } from './dtos/create-event.dto';
import { UpdateEventDto } from './dtos/update-event.dto';
import { EventFilterDto } from './dtos/event-filter.dto';
export declare class EventsService {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    create(dto: CreateEventDto): Promise<any>;
    createBulk(dtos: CreateEventDto[]): Promise<any>;
    findAll(query: EventFilterDto): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, dto: UpdateEventDto): Promise<any>;
    remove(id: number): Promise<any>;
    addParticipant(event_id: number, character_version_id: number): Promise<any>;
    removeParticipant(event_id: number, character_version_id: number): Promise<any>;
    getParticipants(event_id: number): Promise<any>;
}
