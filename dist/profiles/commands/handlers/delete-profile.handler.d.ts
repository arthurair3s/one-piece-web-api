import { ICommandHandler } from '@nestjs/cqrs';
import { DeleteProfileCommand } from '../impl/delete-profile.command';
import { Profile } from '../../models/profile.model';
export declare class DeleteProfileHandler implements ICommandHandler<DeleteProfileCommand> {
    private readonly profileModel;
    constructor(profileModel: typeof Profile);
    execute(command: DeleteProfileCommand): Promise<{
        success: boolean;
        message: string;
    }>;
}
