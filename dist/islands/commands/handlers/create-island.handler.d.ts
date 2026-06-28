import { ICommandHandler } from '@nestjs/cqrs';
import { Sequelize } from 'sequelize-typescript';
import { CreateIslandCommand } from '../impl/create-island.command';
import { Island } from '../../models/island.model';
import { Arc } from '../../../arcs/models/arc.model';
import { ArcIsland } from '../../../arcs/models/arc-island.model';
export declare class CreateIslandHandler implements ICommandHandler<CreateIslandCommand> {
    private readonly islandModel;
    private readonly arcModel;
    private readonly arcIslandModel;
    private readonly sequelize;
    constructor(islandModel: typeof Island, arcModel: typeof Arc, arcIslandModel: typeof ArcIsland, sequelize: Sequelize);
    execute(command: CreateIslandCommand): Promise<Island>;
}
