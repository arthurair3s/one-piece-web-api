import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCharacterDto } from './dtos/create-character.dto';
import { CharacterFilterDto } from './dtos/character-filter.dto';
import { UpdateCharacterDto } from './dtos/update-character.dto';
export declare class CharactersService {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    create(data: CreateCharacterDto): Promise<any>;
    createBulk(data: CreateCharacterDto[]): Promise<any>;
    findAll(filters: CharacterFilterDto): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, data: UpdateCharacterDto): Promise<any>;
    remove(id: number): Promise<any>;
}
