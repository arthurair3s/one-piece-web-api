import { Model } from 'sequelize-typescript';
import { CharacterRead } from '../../characters/models/character-read.model';
import { ArcRead } from '../../arcs/models/arc-read.model';
import { EventRead } from '../../events/models/event-read.model';
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
    arcs: ArcRead[];
    events: EventRead[];
}
