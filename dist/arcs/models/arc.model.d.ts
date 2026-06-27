import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Saga } from '../../sagas/models/saga.model';
import { Island } from '../../islands/models/island.model';
import { CharacterVersion } from '../../character-versions/models/character-version.model';
interface ArcAttributes {
    id: number;
    name: string;
    description: string;
    saga_id: number;
    order: number;
}
interface ArcCreationAttributes extends Optional<ArcAttributes, 'id'> {
}
export declare class Arc extends Model<ArcAttributes, ArcCreationAttributes> {
    id: number;
    name: string;
    description: string;
    saga_id: number;
    saga: Saga;
    order: number;
    islands: Island[];
    character_versions: CharacterVersion[];
}
export {};
