import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateArcDto } from './dtos/create-arcs-dto';
import { UpdateArcDto } from './dtos/update-arcs-dto';
import { FilterArcDto } from './dtos/filter-arcs-dto';
export declare class ArcsService {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    create(dto: CreateArcDto): Promise<any>;
    createBulk(dtos: CreateArcDto[]): Promise<any>;
    findAll(query: FilterArcDto): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, dto: UpdateArcDto): Promise<any>;
    remove(id: number): Promise<any>;
}
