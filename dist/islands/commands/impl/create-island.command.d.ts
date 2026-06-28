import { ArcIslandAssociationDto } from '../../dtos/arc-island-association.dto';
export declare class CreateIslandCommand {
    readonly name: string;
    readonly description: string;
    readonly arc_ids: ArcIslandAssociationDto[];
    readonly coordinate_x: number;
    readonly coordinate_y: number;
    readonly coordinate_z: number;
    readonly model_url: string;
    readonly thumbnail_url?: string | undefined;
    readonly is_active?: boolean | undefined;
    constructor(name: string, description: string, arc_ids: ArcIslandAssociationDto[], coordinate_x: number, coordinate_y: number, coordinate_z: number, model_url: string, thumbnail_url?: string | undefined, is_active?: boolean | undefined);
}
