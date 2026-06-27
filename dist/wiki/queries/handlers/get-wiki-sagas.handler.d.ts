import { IQueryHandler } from '@nestjs/cqrs';
import { GetWikiSagasQuery } from '../impl/get-wiki-sagas.query';
import { SagaRead } from '../../../sagas/models/saga-read.model';
export declare class GetWikiSagasHandler implements IQueryHandler<GetWikiSagasQuery> {
    private readonly sagaReadModel;
    constructor(sagaReadModel: typeof SagaRead);
    execute(_query: GetWikiSagasQuery): Promise<{
        sagas: {
            id: number;
            name: string;
            order: number;
        }[];
    }>;
}
