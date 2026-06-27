import { Model } from 'sequelize-typescript';
import { ArcRead } from '../../arcs/models/arc-read.model';
export declare class IslandRead extends Model {
    id: number;
    name: string;
    description: string;
    coordinate_x: number;
    coordinate_y: number;
    coordinate_z: number;
    model_url: string;
    thumbnail_url?: string;
    is_active: boolean;
    rotation_y: number;
    scale: number;
    arcs: ArcRead[];
}
