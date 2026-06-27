import { ICommandHandler } from '@nestjs/cqrs';
import { CreateEventCommand } from '../impl/create-event.command';
import { Event } from '../../models/event.model';
import { ArcIsland } from '../../../arcs/models/arc-island.model';
export declare class CreateEventHandler implements ICommandHandler<CreateEventCommand> {
    private readonly eventModel;
    private readonly arcIslandModel;
    constructor(eventModel: typeof Event, arcIslandModel: typeof ArcIsland);
    execute(command: CreateEventCommand): Promise<Event>;
}
