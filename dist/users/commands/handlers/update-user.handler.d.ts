import { ICommandHandler } from '@nestjs/cqrs';
import { UpdateUserCommand } from '../impl/update-user.command';
import { User } from '../../models/user.model';
export declare class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
    private readonly userModel;
    constructor(userModel: typeof User);
    execute(command: UpdateUserCommand): Promise<User>;
}
