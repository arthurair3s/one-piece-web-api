import { IQueryHandler } from '@nestjs/cqrs';
import { GetSagasQuery } from '../impl/get-sagas.query';
import { SagaRead } from '../../models/saga-read.model';
export declare class GetSagasHandler implements IQueryHandler<GetSagasQuery> {
    private readonly sagaModel;
    constructor(sagaModel: typeof SagaRead);
    execute(query: GetSagasQuery): Promise<{
        data: SagaRead[];
        meta: {
            total: number;
            page: number;
            last_page: number;
        };
    }>;
}
