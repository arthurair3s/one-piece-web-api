import { CharacterVersionsService } from './character-versions.service';
import { CreateCharacterVersionDto } from './dtos/create-character-version.dto';
import { UpdateCharacterVersionDto } from './dtos/update-character-version.dto';
import { CharacterVersionFilterDto } from './dtos/character-version-filter.dto';
export declare class CharacterVersionsController {
    private readonly characterVersionsService;
    constructor(characterVersionsService: CharacterVersionsService);
    create(body: CreateCharacterVersionDto): Promise<any>;
    createBulk(bodies: CreateCharacterVersionDto[]): Promise<any>;
    findAll(params: CharacterVersionFilterDto): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, body: UpdateCharacterVersionDto): Promise<any>;
    remove(id: number): Promise<any>;
}
