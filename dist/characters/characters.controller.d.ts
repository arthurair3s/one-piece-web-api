import { CharactersService } from './characters.service';
import { CreateCharacterDto } from './dtos/create-character.dto';
import { CharacterFilterDto } from './dtos/character-filter.dto';
import { UpdateCharacterDto } from './dtos/update-character.dto';
export declare class CharactersController {
    private readonly charactersService;
    constructor(charactersService: CharactersService);
    create(body: CreateCharacterDto): Promise<any>;
    createBulk(bodies: CreateCharacterDto[]): Promise<any>;
    findAll(params: CharacterFilterDto): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, body: UpdateCharacterDto): Promise<any>;
    remove(id: number): Promise<any>;
}
