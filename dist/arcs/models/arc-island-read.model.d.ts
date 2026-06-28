import { Model } from 'sequelize-typescript';
import { ArcRead } from './arc-read.model';
import { IslandRead } from '../../islands/models/island-read.model';
import { EventRead } from '../../events/models/event-read.model';
export declare class ArcIslandRead extends Model {
    id: number;
    arc_id: number;
    arc: ArcRead;
    island_id: number;
    island: IslandRead;
    order: number;
    events: EventRead[];
}
