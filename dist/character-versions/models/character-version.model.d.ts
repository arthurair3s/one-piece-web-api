import { Model } from 'sequelize-typescript';
import { Character } from '../../characters/models/character.model';
import { Arc } from '../../arcs/models/arc.model';
export declare class CharacterVersion extends Model {
    id: number;
    character_id: number;
    character: Character;
    arcs: Arc[];
    alias: string;
    epithet: string;
    bounty: number;
    status: string;
    image_url: string;
    description: string;
}
