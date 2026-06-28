import { Model } from 'sequelize-typescript';
import { ArcIsland } from '../../arcs/models/arc-island.model';
import { CharacterVersion } from '../../character-versions/models/character-version.model';
export declare class Event extends Model {
    id: number;
    arc_island_id: number;
    arcIsland: ArcIsland;
    title: string;
    description?: string;
    type: string;
    order: number;
    participants: CharacterVersion[];
}
