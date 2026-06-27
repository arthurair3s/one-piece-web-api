import { ICommandHandler } from '@nestjs/cqrs';
import { DeleteIslandCommand } from '../impl/delete-island.command';
import { Island } from '../../models/island.model';
export declare class DeleteIslandHandler implements ICommandHandler<DeleteIslandCommand> {
    private readonly islandModel;
    constructor(islandModel: typeof Island);
    execute(command: DeleteIslandCommand): Promise<void>;
}
