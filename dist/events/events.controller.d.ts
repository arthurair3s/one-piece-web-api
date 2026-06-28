import { EventsService } from './events.service';
import { CreateEventDto } from './dtos/create-event.dto';
import { UpdateEventDto } from './dtos/update-event.dto';
import { EventFilterDto } from './dtos/event-filter.dto';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    create(createEventDto: CreateEventDto): Promise<any>;
    createBulk(dtos: CreateEventDto[]): Promise<any>;
    findAll(query: EventFilterDto): Promise<any>;
    findOne(id: number): Promise<any>;
    getParticipants(id: number): Promise<any>;
    addParticipant(id: number, character_version_id: number): Promise<any>;
    removeParticipant(id: number, character_version_id: number): Promise<any>;
    update(id: number, updateEventDto: UpdateEventDto): Promise<any>;
    remove(id: number): Promise<any>;
}
