import { ICommandHandler } from '@nestjs/cqrs';
import { Sequelize } from 'sequelize-typescript';
import { UpdateIslandCommand } from '../impl/update-island.command';
import { Island } from '../../models/island.model';
import { Arc } from '../../../arcs/models/arc.model';
import { ArcIsland } from '../../../arcs/models/arc-island.model';
export declare class UpdateIslandHandler implements ICommandHandler<UpdateIslandCommand> {
    private readonly islandModel;
    private readonly arcModel;
    private readonly arcIslandModel;
    private readonly sequelize;
    constructor(islandModel: typeof Island, arcModel: typeof Arc, arcIslandModel: typeof ArcIsland, sequelize: Sequelize);
    execute(command: UpdateIslandCommand): Promise<Island>;
}
