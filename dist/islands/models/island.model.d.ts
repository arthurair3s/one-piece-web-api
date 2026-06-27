import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Arc } from '../../arcs/models/arc.model';
interface IslandAttributes {
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
}
interface IslandCreationAttributes extends Optional<IslandAttributes, 'id' | 'thumbnail_url' | 'is_active' | 'rotation_y' | 'scale'> {
}
export declare class Island extends Model<IslandAttributes, IslandCreationAttributes> {
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
    arcs: Arc[];
}
export {};
