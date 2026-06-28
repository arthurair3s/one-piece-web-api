import { CreateIslandDto } from '../../dtos/create-island.dto';
export declare class CreateIslandsBulkCommand {
    readonly islands: CreateIslandDto[];
    constructor(islands: CreateIslandDto[]);
}
