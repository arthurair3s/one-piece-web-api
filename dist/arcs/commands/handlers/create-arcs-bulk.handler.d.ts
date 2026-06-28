import { ICommandHandler } from '@nestjs/cqrs';
import { Sequelize } from 'sequelize-typescript';
import { CreateArcsBulkCommand } from '../impl/create-arcs-bulk.command';
import { Arc } from '../../models/arc.model';
import { Saga } from '../../../sagas/models/saga.model';
export declare class CreateArcsBulkHandler implements ICommandHandler<CreateArcsBulkCommand> {
    private readonly arcModel;
    private readonly sagaModel;
    private readonly sequelize;
    constructor(arcModel: typeof Arc, sagaModel: typeof Saga, sequelize: Sequelize);
    execute(command: CreateArcsBulkCommand): Promise<Arc[]>;
}
