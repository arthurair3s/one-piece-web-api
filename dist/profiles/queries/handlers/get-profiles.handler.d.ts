import { IQueryHandler } from '@nestjs/cqrs';
import { GetProfilesQuery } from '../impl/get-profiles.query';
import { Profile } from '../../models/profile.model';
export declare class GetProfilesHandler implements IQueryHandler<GetProfilesQuery> {
    private readonly profileModel;
    constructor(profileModel: typeof Profile);
    execute(query: GetProfilesQuery): Promise<{
        rows: Profile[];
        count: number;
    }>;
}
