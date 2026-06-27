import { IQueryHandler } from '@nestjs/cqrs';
import { GetWikiIslandArcQuery } from '../impl/get-wiki-island-arc.query';
import { ArcIslandRead } from '../../../arcs/models/arc-island-read.model';
import { ArcCharacterVersionRead } from '../../../arcs/models/arc-character-version-read.model';
export declare class GetWikiIslandArcHandler implements IQueryHandler<GetWikiIslandArcQuery> {
    private readonly arcIslandReadModel;
    private readonly arcCharacterVersionReadModel;
    constructor(arcIslandReadModel: typeof ArcIslandRead, arcCharacterVersionReadModel: typeof ArcCharacterVersionRead);
    execute(query: GetWikiIslandArcQuery): Promise<{
        island: {
            id: any;
            name: any;
        };
        arc: {
            id: any;
            name: any;
            sagaName: any;
        };
        characters: {
            id: any;
            name: any;
            epithet: any;
            imageUrl: any;
            bounty: any;
            status: any;
        }[];
        events: any;
    }>;
}
