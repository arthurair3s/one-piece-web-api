import { ICommandHandler } from '@nestjs/cqrs';
import { DeleteArcCommand } from '../impl/delete-arc.command';
import { Arc } from 'src/arcs/models/arc.model';
import { Island } from 'src/islands/models/island.model';
export declare class DeleteArcHandler implements ICommandHandler<DeleteArcCommand> {
    private readonly arcModel;
    private readonly islandModel;
    constructor(arcModel: typeof Arc, islandModel: typeof Island);
    execute(command: DeleteArcCommand): Promise<void>;
}
