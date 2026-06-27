import { IQueryHandler } from '@nestjs/cqrs';
import { GetWikiIslandQuery } from '../impl/get-wiki-island.query';
import { IslandRead } from '../../../islands/models/island-read.model';
import { ArcIslandRead } from '../../../arcs/models/arc-island-read.model';
export declare class GetWikiIslandHandler implements IQueryHandler<GetWikiIslandQuery> {
    private readonly islandReadModel;
    private readonly arcIslandReadModel;
    constructor(islandReadModel: typeof IslandRead, arcIslandReadModel: typeof ArcIslandRead);
    execute(query: GetWikiIslandQuery): Promise<{
        id: number;
        name: string;
        description: string;
        thumbnailUrl: string | undefined;
        coordinates: {
            x: number;
            y: number;
            z: number;
        };
        arcs: {
            id: any;
            name: any;
            sagaName: any;
            order: any;
            eventsCount: number;
        }[];
    }>;
}
