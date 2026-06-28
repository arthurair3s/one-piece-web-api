import { ICommandHandler } from '@nestjs/cqrs';
import { DeleteArcCommand } from '../impl/delete-arc.command';
import { Arc } from 'src/arcs/models/arc.model';
import { Island } from 'src/islands/models/island.model';
import { ArcCharacterVersion } from 'src/arcs/models/arc-character-version.model';
import { Sequelize } from 'sequelize-typescript';
export declare class DeleteArcHandler implements ICommandHandler<DeleteArcCommand> {
    private readonly arcModel;
    private readonly islandModel;
    private readonly arcCharacterVersionModel;
    private readonly sequelize;
    constructor(arcModel: typeof Arc, islandModel: typeof Island, arcCharacterVersionModel: typeof ArcCharacterVersion, sequelize: Sequelize);
    execute(command: DeleteArcCommand): Promise<void>;
}
