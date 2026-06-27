import { Model } from 'sequelize-typescript';
import { ArcRead } from './arc-read.model';
import { CharacterRead } from '../../characters/models/character-read.model';
import { CharacterVersionRead } from '../../character-versions/models/character-version-read.model';
export declare class ArcCharacterVersionRead extends Model {
    id: number;
    arc_id: number;
    arc: ArcRead;
    character_version_id: number;
    characterVersion: CharacterVersionRead;
    character_id: number;
    character: CharacterRead;
    order: number;
}
