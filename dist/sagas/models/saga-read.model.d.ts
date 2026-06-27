import { Model } from 'sequelize-typescript';
import { ArcRead } from '../../arcs/models/arc-read.model';
export declare class SagaRead extends Model {
    id: number;
    name: string;
    description?: string;
    order: number;
    arcs: ArcRead[];
}
