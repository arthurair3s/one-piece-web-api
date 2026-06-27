import { Model } from 'sequelize-typescript';
import { CharacterVersionRead } from '../../character-versions/models/character-version-read.model';
export declare class CharacterRead extends Model {
    id: number;
    name: string;
    slug: string;
    versions: CharacterVersionRead[];
}
