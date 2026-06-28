import { ICommandHandler } from '@nestjs/cqrs';
import { CreateArcCommand } from '../impl/create-arc.command';
import { Arc } from '../../models/arc.model';
import { Saga } from '../../../sagas/models/saga.model';
export declare class CreateArcHandler implements ICommandHandler<CreateArcCommand> {
    private readonly arcModel;
    private readonly sagaModel;
    constructor(arcModel: typeof Arc, sagaModel: typeof Saga);
    execute(command: CreateArcCommand): Promise<Arc>;
}
