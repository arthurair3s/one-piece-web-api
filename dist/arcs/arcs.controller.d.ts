import { ArcsService } from './arcs.service';
import { CreateArcDto } from './dtos/create-arcs-dto';
import { UpdateArcDto } from './dtos/update-arcs-dto';
import { FilterArcDto } from './dtos/filter-arcs-dto';
export declare class ArcsController {
    private readonly arcsService;
    constructor(arcsService: ArcsService);
    create(dto: CreateArcDto): Promise<any>;
    createBulk(dtos: CreateArcDto[]): Promise<any>;
    findAll(query: FilterArcDto): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, dto: UpdateArcDto): Promise<any>;
    remove(id: number): Promise<any>;
}
