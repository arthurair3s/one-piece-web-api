import { ArcIslandAssociationDto } from '../../dtos/arc-island-association.dto';
export declare class UpdateIslandCommand {
    readonly id: number;
    readonly name?: string | undefined;
    readonly description?: string | undefined;
    readonly arc_ids?: ArcIslandAssociationDto[] | undefined;
    readonly coordinate_x?: number | undefined;
    readonly coordinate_y?: number | undefined;
    readonly coordinate_z?: number | undefined;
    readonly model_url?: string | undefined;
    readonly thumbnail_url?: string | undefined;
    readonly is_active?: boolean | undefined;
    readonly rotation_y?: number | undefined;
    readonly scale?: number | undefined;
    constructor(id: number, name?: string | undefined, description?: string | undefined, arc_ids?: ArcIslandAssociationDto[] | undefined, coordinate_x?: number | undefined, coordinate_y?: number | undefined, coordinate_z?: number | undefined, model_url?: string | undefined, thumbnail_url?: string | undefined, is_active?: boolean | undefined, rotation_y?: number | undefined, scale?: number | undefined);
}
