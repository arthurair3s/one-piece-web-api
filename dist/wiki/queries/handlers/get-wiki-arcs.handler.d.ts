import { IQueryHandler } from '@nestjs/cqrs';
import { GetWikiArcsQuery } from '../impl/get-wiki-arcs.query';
import { ArcRead } from '../../../arcs/models/arc-read.model';
export declare class GetWikiArcsHandler implements IQueryHandler<GetWikiArcsQuery> {
    private readonly arcReadModel;
    constructor(arcReadModel: typeof ArcRead);
    execute(query: GetWikiArcsQuery): Promise<{
        arcs: {
            id: any;
            name: any;
            order: any;
            sagaId: any;
            sagaName: any;
            islandsCount: number;
        }[];
    }>;
}
