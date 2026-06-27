import { IQueryHandler } from '@nestjs/cqrs';
import { GetCharacterVersionsQuery } from '../impl/get-character-versions.query';
import { CharacterVersion } from '../../models/character-version.model';
export declare class GetCharacterVersionsHandler implements IQueryHandler<GetCharacterVersionsQuery> {
    private readonly characterVersionModel;
    constructor(characterVersionModel: typeof CharacterVersion);
    execute(query: GetCharacterVersionsQuery): Promise<{
        rows: CharacterVersion[];
        count: number;
    }>;
}
