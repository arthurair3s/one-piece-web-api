import { EventRead } from '../events/models/event-read.model';
import { CharacterRead } from '../characters/models/character-read.model';
import { CharacterVersionRead } from '../character-versions/models/character-version-read.model';
import { EventParticipantRead } from '../events/models/event-participant-read.model';
import { IslandRead } from '../islands/models/island-read.model';
import { ArcRead } from '../arcs/models/arc-read.model';
import { ArcIslandRead } from '../arcs/models/arc-island-read.model';
import { SagaRead } from '../sagas/models/saga-read.model';
import { ArcCharacterVersionRead } from '../arcs/models/arc-character-version-read.model';
export interface DebeziumPayload<T> {
    before: T | null;
    after: T | null;
    source: any;
    op: 'c' | 'u' | 'd' | 'r';
    ts_ms: number;
    transaction: any;
}
export declare class CdcService {
    private readonly eventReadModel;
    private readonly characterReadModel;
    private readonly characterVersionReadModel;
    private readonly eventParticipantReadModel;
    private readonly islandReadModel;
    private readonly arcReadModel;
    private readonly arcIslandReadModel;
    private readonly sagaReadModel;
    private readonly arcCharacterVersionReadModel;
    private readonly logger;
    constructor(eventReadModel: typeof EventRead, characterReadModel: typeof CharacterRead, characterVersionReadModel: typeof CharacterVersionRead, eventParticipantReadModel: typeof EventParticipantRead, islandReadModel: typeof IslandRead, arcReadModel: typeof ArcRead, arcIslandReadModel: typeof ArcIslandRead, sagaReadModel: typeof SagaRead, arcCharacterVersionReadModel: typeof ArcCharacterVersionRead);
    processEventChange(payload: DebeziumPayload<any>): Promise<void>;
    processCharacterChange(payload: DebeziumPayload<any>): Promise<void>;
    processCharacterVersionChange(payload: DebeziumPayload<any>): Promise<void>;
    processEventParticipantChange(payload: DebeziumPayload<any>): Promise<void>;
    processIslandChange(payload: DebeziumPayload<any>): Promise<void>;
    processArcChange(payload: DebeziumPayload<any>): Promise<void>;
    processArcIslandChange(payload: DebeziumPayload<any>): Promise<void>;
    processSagaChange(payload: DebeziumPayload<any>): Promise<void>;
    processArcCharacterVersionChange(payload: DebeziumPayload<any>): Promise<void>;
}
