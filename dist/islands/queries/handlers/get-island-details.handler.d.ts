import { IQueryHandler } from '@nestjs/cqrs';
import { GetIslandDetailsQuery } from '../impl/get-island-details.query';
import { IslandRead } from '../../models/island-read.model';
import { ArcIslandRead } from '../../../arcs/models/arc-island-read.model';
import { ArcCharacterVersionRead } from '../../../arcs/models/arc-character-version-read.model';
export declare class GetIslandDetailsHandler implements IQueryHandler<GetIslandDetailsQuery> {
    private readonly islandModel;
    private readonly arcIslandModel;
    private readonly arcCharacterVersionModel;
    constructor(islandModel: typeof IslandRead, arcIslandModel: typeof ArcIslandRead, arcCharacterVersionModel: typeof ArcCharacterVersionRead);
    execute(query: GetIslandDetailsQuery): Promise<{
        id: number;
        name: string;
        description: string;
        coordinates: {
            x: number;
            y: number;
            z: number;
        };
        arc: {
            id: number;
        };
        characters: {
            id: any;
            characterId: any;
            name: any;
            epithet: any;
            image: any;
            bounty: any;
            status: any;
        }[];
        events: {
            id: any;
            title: any;
            description: any;
        }[];
    }>;
}
