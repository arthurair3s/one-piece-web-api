import { Model } from 'sequelize-typescript';
import { CharacterRead } from '../../characters/models/character-read.model';
export declare class CharacterVersionRead extends Model {
    id: number;
    character_id: number;
    character: CharacterRead;
    alias: string;
    epithet: string;
    bounty: number;
    status: string;
    image_url: string;
    description: string;
}
