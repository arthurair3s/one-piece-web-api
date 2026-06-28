import { CharacterVersionFilterDto } from '../../dtos/character-version-filter.dto';
export declare class GetCharacterVersionsQuery {
    readonly filters: CharacterVersionFilterDto;
    constructor(filters: CharacterVersionFilterDto);
}
