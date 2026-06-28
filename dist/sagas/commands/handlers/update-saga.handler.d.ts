import { ICommandHandler } from '@nestjs/cqrs';
import { UpdateSagaCommand } from '../impl/update-saga.command';
import { Saga } from 'src/sagas/models/saga.model';
export declare class UpdateSagaHandler implements ICommandHandler<UpdateSagaCommand> {
    private readonly sagaModel;
    constructor(sagaModel: typeof Saga);
    execute(command: UpdateSagaCommand): Promise<Saga>;
}
