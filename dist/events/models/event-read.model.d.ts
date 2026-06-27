import { Model } from 'sequelize-typescript';
import { CharacterVersionRead } from '../../character-versions/models/character-version-read.model';
import { ArcIslandRead } from '../../arcs/models/arc-island-read.model';
export declare class EventRead extends Model {
    id: number;
    arc_island_id: number;
    arcIsland: ArcIslandRead;
    title: string;
    description?: string;
    type: string;
    order: number;
    participants: CharacterVersionRead[];
}
