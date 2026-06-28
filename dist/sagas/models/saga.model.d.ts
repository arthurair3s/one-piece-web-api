import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Arc } from '../../arcs/models/arc.model';
interface SagaAttributes {
    id: number;
    name: string;
    description?: string;
    order: number;
}
interface SagaCreationAttributes extends Optional<SagaAttributes, 'id'> {
}
export declare class Saga extends Model<SagaAttributes, SagaCreationAttributes> {
    id: number;
    name: string;
    description?: string;
    order: number;
    arcs: Arc[];
}
export {};
