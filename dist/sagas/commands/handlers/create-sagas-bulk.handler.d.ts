import { ICommandHandler } from '@nestjs/cqrs';
import { Sequelize } from 'sequelize-typescript';
import { CreateSagasBulkCommand } from '../impl/create-sagas-bulk.command';
import { Saga } from '../../models/saga.model';
export declare class CreateSagasBulkHandler implements ICommandHandler<CreateSagasBulkCommand> {
    private readonly sagaModel;
    private readonly sequelize;
    constructor(sagaModel: typeof Saga, sequelize: Sequelize);
    execute(command: CreateSagasBulkCommand): Promise<Saga[]>;
}
