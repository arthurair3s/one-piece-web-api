import { CreateArcDto } from '../../dtos/create-arcs-dto';
export declare class CreateArcsBulkCommand {
    readonly arcs: CreateArcDto[];
    constructor(arcs: CreateArcDto[]);
}
