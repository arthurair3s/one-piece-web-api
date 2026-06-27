import { CreateSagaDto } from '../../dtos/create-saga-dto';
export declare class CreateSagasBulkCommand {
    readonly sagas: CreateSagaDto[];
    constructor(sagas: CreateSagaDto[]);
}
