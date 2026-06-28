import { IQueryHandler } from '@nestjs/cqrs';
import { GetWikiMapQuery } from '../impl/get-wiki-map.query';
import { IslandRead } from '../../../islands/models/island-read.model';
export declare class GetWikiMapHandler implements IQueryHandler<GetWikiMapQuery> {
    private readonly islandReadModel;
    constructor(islandReadModel: typeof IslandRead);
    execute(_query: GetWikiMapQuery): Promise<{
        islands: {
            id: any;
            name: any;
            thumbnailUrl: any;
            model_url: any;
            coordinates: {
                x: any;
                y: any;
                z: any;
            };
            arcCount: number;
        }[];
        meta: {
            total: number;
        };
    }>;
}
