import { ICommandHandler } from '@nestjs/cqrs';
import { Sequelize } from 'sequelize-typescript';
import { CreateEventsBulkCommand } from '../impl/create-events-bulk.command';
import { Event } from '../../models/event.model';
import { ArcIsland } from '../../../arcs/models/arc-island.model';
export declare class CreateEventsBulkHandler implements ICommandHandler<CreateEventsBulkCommand> {
    private readonly eventModel;
    private readonly arcIslandModel;
    private readonly sequelize;
    constructor(eventModel: typeof Event, arcIslandModel: typeof ArcIsland, sequelize: Sequelize);
    execute(command: CreateEventsBulkCommand): Promise<Event[]>;
}
