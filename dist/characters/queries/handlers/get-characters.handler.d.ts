import { IQueryHandler } from '@nestjs/cqrs';
import { GetCharactersQuery } from '../impl/get-characters.query';
import { Character } from '../../models/character.model';
export declare class GetCharactersHandler implements IQueryHandler<GetCharactersQuery> {
    private readonly characterModel;
    constructor(characterModel: typeof Character);
    execute(query: GetCharactersQuery): Promise<{
        rows: Character[];
        count: number;
    }>;
}
