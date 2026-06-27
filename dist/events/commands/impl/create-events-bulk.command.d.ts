import { CreateEventDto } from '../../dtos/create-event.dto';
export declare class CreateEventsBulkCommand {
    readonly events: CreateEventDto[];
    constructor(events: CreateEventDto[]);
}
