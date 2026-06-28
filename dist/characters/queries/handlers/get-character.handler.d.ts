import { IQueryHandler } from '@nestjs/cqrs';
import { GetCharacterQuery } from '../impl/get-character.query';
import { Character } from '../../models/character.model';
export declare class GetCharacterHandler implements IQueryHandler<GetCharacterQuery> {
    private readonly characterModel;
    constructor(characterModel: typeof Character);
    execute(query: GetCharacterQuery): Promise<any>;
}
