import { IQueryHandler } from '@nestjs/cqrs';
import { IslandRead } from '@/islands/models/island-read.model';
import { GetIslandsMapQuery } from '../impl/get-islands-map.query';
export declare class GetIslandsMapHandler implements IQueryHandler<GetIslandsMapQuery> {
    private readonly islandModel;
    constructor(islandModel: typeof IslandRead);
    execute(): Promise<{
        id: number;
        name: string;
        model_url: string;
        thumbnail_url: string | undefined;
        rotation_y: number;
        scale: number;
        coordinates: {
            x: number;
            y: number;
            z: number;
        };
    }[]>;
}
