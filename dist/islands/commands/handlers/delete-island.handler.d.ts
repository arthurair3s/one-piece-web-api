import { ICommandHandler } from '@nestjs/cqrs';
import { DeleteIslandCommand } from '../impl/delete-island.command';
import { Island } from '../../models/island.model';
import { ArcIsland } from '../../../arcs/models/arc-island.model';
import { Sequelize } from 'sequelize-typescript';
export declare class DeleteIslandHandler implements ICommandHandler<DeleteIslandCommand> {
    private readonly islandModel;
    private readonly arcIslandModel;
    private readonly sequelize;
    constructor(islandModel: typeof Island, arcIslandModel: typeof ArcIsland, sequelize: Sequelize);
    execute(command: DeleteIslandCommand): Promise<void>;
}
