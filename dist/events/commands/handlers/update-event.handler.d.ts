import { ICommandHandler } from '@nestjs/cqrs';
import { UpdateEventCommand } from '../impl/update-event.command';
import { Event } from '../../models/event.model';
import { ArcIsland } from '../../../arcs/models/arc-island.model';
export declare class UpdateEventHandler implements ICommandHandler<UpdateEventCommand> {
    private readonly eventModel;
    private readonly arcIslandModel;
    constructor(eventModel: typeof Event, arcIslandModel: typeof ArcIsland);
    execute(command: UpdateEventCommand): Promise<Event>;
}
