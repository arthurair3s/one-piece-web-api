import { OnModuleInit } from '@nestjs/common';
import { CdcService } from './cdc.service';
import { ArcIslandRead } from '../arcs/models/arc-island-read.model';
import { ArcCharacterVersionRead } from '../arcs/models/arc-character-version-read.model';
import { EventParticipantRead } from '../events/models/event-participant-read.model';
export declare class CdcBypassService implements OnModuleInit {
    private readonly cdcService;
    private readonly arcIslandReadModel;
    private readonly arcCharacterVersionReadModel;
    private readonly eventParticipantReadModel;
    private readonly logger;
    constructor(cdcService: CdcService, arcIslandReadModel: typeof ArcIslandRead, arcCharacterVersionReadModel: typeof ArcCharacterVersionRead, eventParticipantReadModel: typeof EventParticipantRead);
    onModuleInit(): void;
}
