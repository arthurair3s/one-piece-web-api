import { IQueryHandler } from '@nestjs/cqrs';
import { GetArcsQuery } from '../impl/get-arcs.query';
import { Arc } from '../../models/arc.model';
export declare class GetArcsHandler implements IQueryHandler<GetArcsQuery> {
    private readonly arcModel;
    constructor(arcModel: typeof Arc);
    execute(query: GetArcsQuery): Promise<{
        data: Arc[];
        meta: {
            total: number;
            page: number;
            last_page: number;
        };
    }>;
}
