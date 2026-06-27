import { ICommandHandler } from '@nestjs/cqrs';
import { CreateSagaCommand } from '../impl/create-saga.command';
import { Saga } from 'src/sagas/models/saga.model';
export declare class CreateSagaHandler implements ICommandHandler<CreateSagaCommand> {
    private readonly sagaModel;
    constructor(sagaModel: typeof Saga);
    execute(command: CreateSagaCommand): Promise<Saga>;
}
