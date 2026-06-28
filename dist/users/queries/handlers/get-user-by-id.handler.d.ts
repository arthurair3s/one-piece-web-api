import { IQueryHandler } from '@nestjs/cqrs';
import { GetUserByIdQuery } from '../impl/get-user-by-id.query';
import { User } from '../../models/user.model';
export declare class GetUserByIdHandler implements IQueryHandler<GetUserByIdQuery> {
    private readonly userModel;
    constructor(userModel: typeof User);
    execute(query: GetUserByIdQuery): Promise<User>;
}
