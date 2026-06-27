import { IQueryHandler } from '@nestjs/cqrs';
import { GetSagaByIdQuery } from '../impl/get-saga-by-id.query';
import { SagaRead } from '../../models/saga-read.model';
export declare class GetSagaByIdHandler implements IQueryHandler<GetSagaByIdQuery> {
    private readonly sagaModel;
    constructor(sagaModel: typeof SagaRead);
    execute(query: GetSagaByIdQuery): Promise<SagaRead>;
}
