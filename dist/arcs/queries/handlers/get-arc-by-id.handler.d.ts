import { IQueryHandler } from '@nestjs/cqrs';
import { GetArcByIdQuery } from '../impl/get-arc-by-id.query';
import { Arc } from '../../models/arc.model';
export declare class GetArcByIdHandler implements IQueryHandler<GetArcByIdQuery> {
    private readonly arcModel;
    constructor(arcModel: typeof Arc);
    execute(query: GetArcByIdQuery): Promise<Arc>;
}
