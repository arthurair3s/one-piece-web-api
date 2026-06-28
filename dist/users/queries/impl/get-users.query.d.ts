import { UserFilterDto } from '../../dtos/user-filter.dto';
export declare class GetUsersQuery {
    readonly filters: UserFilterDto;
    constructor(filters: UserFilterDto);
}
