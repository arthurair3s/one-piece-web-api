import { ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../impl/create-user.command';
import { User } from '../../models/user.model';
export declare class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    private readonly userModel;
    constructor(userModel: typeof User);
    execute(command: CreateUserCommand): Promise<User>;
}
