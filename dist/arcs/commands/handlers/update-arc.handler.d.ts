import { ICommandHandler } from '@nestjs/cqrs';
import { UpdateArcCommand } from '../impl/update-arc.command';
import { Arc } from 'src/arcs/models/arc.model';
import { Saga } from 'src/sagas/models/saga.model';
export declare class UpdateArcHandler implements ICommandHandler<UpdateArcCommand> {
    private readonly arcModel;
    private readonly sagaModel;
    constructor(arcModel: typeof Arc, sagaModel: typeof Saga);
    execute(command: UpdateArcCommand): Promise<Arc>;
}
