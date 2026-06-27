import { Model } from 'sequelize-typescript';
import { CharacterVersion } from '../../character-versions/models/character-version.model';
export declare class Character extends Model {
    id: number;
    name: string;
    slug: string;
    versions: CharacterVersion[];
    current_status?: string;
}
