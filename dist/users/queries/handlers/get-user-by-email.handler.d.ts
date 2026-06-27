import { IQueryHandler } from '@nestjs/cqrs';
import { GetUserByEmailQuery } from '../impl/get-user-by-email.query';
import { User } from '../../models/user.model';
export declare class GetUserByEmailHandler implements IQueryHandler<GetUserByEmailQuery> {
    private readonly userModel;
    constructor(userModel: typeof User);
    execute(query: GetUserByEmailQuery): Promise<User | null>;
}
