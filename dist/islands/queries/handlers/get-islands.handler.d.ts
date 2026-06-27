import { IQueryHandler } from '@nestjs/cqrs';
import { GetIslandsQuery } from '../impl/get-islands.query';
import { IslandRead } from '../../models/island-read.model';
export declare class GetIslandsHandler implements IQueryHandler<GetIslandsQuery> {
    private readonly islandModel;
    constructor(islandModel: typeof IslandRead);
    execute(query: GetIslandsQuery): Promise<{
        data: {
            id: number;
            name: string;
            model_url: string;
            thumbnail_url: string | undefined;
            coordinates: {
                x: number;
                y: number;
                z: number;
            };
        }[];
        meta: {
            total: number;
            page: number;
            last_page: number;
        };
    }>;
}
