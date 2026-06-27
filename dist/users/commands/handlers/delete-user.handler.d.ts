import { ICommandHandler } from '@nestjs/cqrs';
import { DeleteUserCommand } from '../impl/delete-user.command';
import { User } from '../../models/user.model';
export declare class DeleteUserHandler implements ICommandHandler<DeleteUserCommand> {
    private readonly userModel;
    constructor(userModel: typeof User);
    execute(command: DeleteUserCommand): Promise<{
        success: boolean;
        message: string;
    }>;
}
