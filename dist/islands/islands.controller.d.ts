import { IslandsService } from './islands.service';
import { CreateIslandDto } from './dtos/create-island.dto';
import { UpdateIslandDto } from './dtos/update-island.dto';
import { FilterIslandDto } from './dtos/filter-island.dto';
export declare class IslandsController {
    private readonly islandsService;
    constructor(islandsService: IslandsService);
    findAll(query: FilterIslandDto): Promise<any>;
    create(dto: CreateIslandDto): Promise<any>;
    getMap(): Promise<any>;
    getArcs(id: number): Promise<any>;
    findDetails(id: number, arcId: number): Promise<any>;
    createBulk(dtos: CreateIslandDto[]): Promise<any>;
    update(id: number, dto: UpdateIslandDto): Promise<any>;
    remove(id: number): Promise<any>;
}
