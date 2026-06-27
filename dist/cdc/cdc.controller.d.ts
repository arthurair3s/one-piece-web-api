import { CdcService } from './cdc.service';
export declare class CdcController {
    private readonly cdcService;
    private readonly logger;
    constructor(cdcService: CdcService);
    handleEventChange(message: any): Promise<void>;
    handleCharacterChange(message: any): Promise<void>;
    handleCharacterVersionChange(message: any): Promise<void>;
    handleEventParticipantChange(message: any): Promise<void>;
    handleIslandChange(message: any): Promise<void>;
    handleArcChange(message: any): Promise<void>;
    handleArcIslandChange(message: any): Promise<void>;
    handleSagaChange(message: any): Promise<void>;
    handleArcCharacterVersionChange(message: any): Promise<void>;
    private extractPayload;
}
