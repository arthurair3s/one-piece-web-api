import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCharacterVersionDto } from './dtos/create-character-version.dto';
import { UpdateCharacterVersionDto } from './dtos/update-character-version.dto';
import { CharacterVersionFilterDto } from './dtos/character-version-filter.dto';
export declare class CharacterVersionsService {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    create(data: CreateCharacterVersionDto): Promise<any>;
    createBulk(data: CreateCharacterVersionDto[]): Promise<any>;
    findAll(filters: CharacterVersionFilterDto): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, data: UpdateCharacterVersionDto): Promise<any>;
    remove(id: number): Promise<any>;
}
