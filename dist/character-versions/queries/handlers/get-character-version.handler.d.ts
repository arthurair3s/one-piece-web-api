import { IQueryHandler } from '@nestjs/cqrs';
import { GetCharacterVersionQuery } from '../impl/get-character-version.query';
import { CharacterVersion } from '../../models/character-version.model';
export declare class GetCharacterVersionHandler implements IQueryHandler<GetCharacterVersionQuery> {
    private readonly characterVersionModel;
    constructor(characterVersionModel: typeof CharacterVersion);
    execute(query: GetCharacterVersionQuery): Promise<CharacterVersion>;
}
