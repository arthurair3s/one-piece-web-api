import { CharacterStatus } from '../../common/enums/character-status.enum';
export declare class CreateCharacterVersionDto {
    character_id: number;
    arc_ids?: number[];
    alias?: string;
    epithet?: string;
    bounty?: number;
    status?: CharacterStatus;
    image_url?: string;
    description?: string;
}
