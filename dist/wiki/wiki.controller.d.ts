import { QueryBus } from '@nestjs/cqrs';
import { WikiMapFilterDto } from './dtos/wiki-map-filter.dto';
import { WikiIslandContextDto } from './dtos/wiki-island-context.dto';
export declare class WikiController {
    private readonly queryBus;
    constructor(queryBus: QueryBus);
    getSagas(): Promise<any>;
    getArcs(sagaId?: number): Promise<any>;
    getMap(): Promise<any>;
    getMapFiltered(filters: WikiMapFilterDto): Promise<any>;
    getIsland(id: number, context: WikiIslandContextDto): Promise<any>;
    getIslandArc(islandId: number, arcId: number): Promise<any>;
}
