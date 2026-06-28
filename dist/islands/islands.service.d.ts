import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateIslandDto } from './dtos/create-island.dto';
import { UpdateIslandDto } from './dtos/update-island.dto';
import { FilterIslandDto } from './dtos/filter-island.dto';
export declare class IslandsService {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    create(dto: CreateIslandDto): Promise<any>;
    createBulk(dtos: CreateIslandDto[]): Promise<any>;
    findAll(query: FilterIslandDto): Promise<any>;
    getMap(): Promise<any>;
    getArcs(islandId: number): Promise<any>;
    findDetails(id: number, arcId: number): Promise<any>;
    update(id: number, dto: UpdateIslandDto): Promise<any>;
    remove(id: number): Promise<any>;
}
