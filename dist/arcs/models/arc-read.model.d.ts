import { Model } from 'sequelize-typescript';
import { IslandRead } from '../../islands/models/island-read.model';
import { SagaRead } from '../../sagas/models/saga-read.model';
import { CharacterVersionRead } from '../../character-versions/models/character-version-read.model';
export declare class ArcRead extends Model {
    id: number;
    name: string;
    description: string;
    saga_id: number;
    saga: SagaRead;
    order: number;
    islands: IslandRead[];
    character_versions: CharacterVersionRead[];
}
