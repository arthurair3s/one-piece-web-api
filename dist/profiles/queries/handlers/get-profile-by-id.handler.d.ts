import { IQueryHandler } from '@nestjs/cqrs';
import { GetProfileByIdQuery } from '../impl/get-profile-by-id.query';
import { Profile } from '../../models/profile.model';
export declare class GetProfileByIdHandler implements IQueryHandler<GetProfileByIdQuery> {
    private readonly profileModel;
    constructor(profileModel: typeof Profile);
    execute(query: GetProfileByIdQuery): Promise<Profile>;
}
