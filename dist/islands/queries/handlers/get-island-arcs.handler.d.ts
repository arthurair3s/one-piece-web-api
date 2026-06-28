import { IQueryHandler } from '@nestjs/cqrs';
import { IslandRead } from '../../models/island-read.model';
import { GetIslandArcsQuery } from '../impl/get-island-arcs.query';
export declare class GetIslandArcsHandler implements IQueryHandler<GetIslandArcsQuery> {
    private readonly islandModel;
    constructor(islandModel: typeof IslandRead);
    execute(query: GetIslandArcsQuery): Promise<{
        island: {
            id: number;
            name: string;
        };
        arcs: {
            id: any;
            name: any;
            order: any;
        }[];
    }>;
}
