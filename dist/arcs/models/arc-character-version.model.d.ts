import { Model } from 'sequelize-typescript';
import { Character } from '../../characters/models/character.model';
import { CharacterVersion } from '../../character-versions/models/character-version.model';
export declare class ArcCharacterVersion extends Model {
    arc_id: number;
    character_version_id: number;
    characterVersion: CharacterVersion;
    character_id: number;
    character: Character;
    order: number;
}
