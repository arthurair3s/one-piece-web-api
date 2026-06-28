import { ArcIslandAssociationDto } from './arc-island-association.dto';
export declare class UpdateIslandDto {
    name?: string;
    description?: string;
    arc_ids?: ArcIslandAssociationDto[];
    coordinate_x?: number;
    coordinate_y?: number;
    coordinate_z?: number;
    model_url?: string;
    thumbnail_url?: string;
    is_active?: boolean;
    rotation_y?: number;
    scale?: number;
}
