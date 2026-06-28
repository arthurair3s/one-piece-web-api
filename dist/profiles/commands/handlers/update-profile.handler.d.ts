import { ICommandHandler } from '@nestjs/cqrs';
import { UpdateProfileCommand } from '../impl/update-profile.command';
import { Profile } from '../../models/profile.model';
export declare class UpdateProfileHandler implements ICommandHandler<UpdateProfileCommand> {
    private readonly profileModel;
    constructor(profileModel: typeof Profile);
    execute(command: UpdateProfileCommand): Promise<Profile>;
}
