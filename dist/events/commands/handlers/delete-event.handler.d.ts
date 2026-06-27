import { ICommandHandler } from '@nestjs/cqrs';
import { DeleteEventCommand } from '../impl/delete-event.command';
import { Event } from '../../models/event.model';
export declare class DeleteEventHandler implements ICommandHandler<DeleteEventCommand> {
    private readonly eventModel;
    constructor(eventModel: typeof Event);
    execute(command: DeleteEventCommand): Promise<void>;
}
