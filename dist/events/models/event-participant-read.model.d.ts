import { Model } from 'sequelize-typescript';
import { EventRead } from './event-read.model';
import { CharacterVersionRead } from '../../character-versions/models/character-version-read.model';
export declare class EventParticipantRead extends Model {
    id: number;
    event_id: number;
    event: EventRead;
    character_version_id: number;
    characterVersion: CharacterVersionRead;
}
