import { IQueryHandler } from '@nestjs/cqrs';
import { GetUsersQuery } from '../impl/get-users.query';
import { User } from '../../models/user.model';
export declare class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
    private readonly userModel;
    constructor(userModel: typeof User);
    execute(query: GetUsersQuery): Promise<{
        rows: User[];
        count: number;
    }>;
}
