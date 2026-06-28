import { ICommandHandler } from '@nestjs/cqrs';
import { CreateProfileCommand } from '../impl/create-profile.command';
import { Profile } from '../../models/profile.model';
export declare class CreateProfileHandler implements ICommandHandler<CreateProfileCommand> {
    private readonly profileModel;
    constructor(profileModel: typeof Profile);
    execute(command: CreateProfileCommand): Promise<Profile>;
}
