import { Model } from 'sequelize-typescript';
import { Event } from '../../events/models/event.model';
export declare class ArcIsland extends Model {
    id: number;
    arc_id: number;
    island_id: number;
    order: number;
    events: Event[];
}
