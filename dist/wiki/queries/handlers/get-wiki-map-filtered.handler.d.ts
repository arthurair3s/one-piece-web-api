import { IQueryHandler } from '@nestjs/cqrs';
import { GetWikiMapFilteredQuery } from '../impl/get-wiki-map-filtered.query';
import { IslandRead } from '../../../islands/models/island-read.model';
export declare class GetWikiMapFilteredHandler implements IQueryHandler<GetWikiMapFilteredQuery> {
    private readonly islandReadModel;
    constructor(islandReadModel: typeof IslandRead);
    execute(query: GetWikiMapFilteredQuery): Promise<{
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
