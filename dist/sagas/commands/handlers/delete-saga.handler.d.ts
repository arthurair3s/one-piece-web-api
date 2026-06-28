import { ICommandHandler } from '@nestjs/cqrs';
import { DeleteSagaCommand } from '../impl/delete-saga.command';
import { Saga } from 'src/sagas/models/saga.model';
import { Arc } from 'src/arcs/models/arc.model';
export declare class DeleteSagaHandler implements ICommandHandler<DeleteSagaCommand> {
    private readonly sagaModel;
    private readonly arcModel;
    constructor(sagaModel: typeof Saga, arcModel: typeof Arc);
    execute(command: DeleteSagaCommand): Promise<void>;
}
