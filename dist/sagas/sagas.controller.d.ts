import { SagasService } from './sagas.service';
import { CreateSagaDto } from './dtos/create-saga-dto';
import { UpdateSagaDto } from './dtos/update-saga-dto';
import { FilterSagaDto } from './dtos/filter-saga-dto';
export declare class SagasController {
    private readonly sagasService;
    constructor(sagasService: SagasService);
    create(dto: CreateSagaDto): Promise<any>;
    createBulk(dtos: CreateSagaDto[]): Promise<any>;
    findAll(query: FilterSagaDto): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, dto: UpdateSagaDto): Promise<any>;
    remove(id: number): Promise<any>;
}
