import { ProfileFilterDto } from '../../dtos/profile-filter.dto';
export declare class GetProfilesQuery {
    readonly filters: ProfileFilterDto;
    constructor(filters: ProfileFilterDto);
}
