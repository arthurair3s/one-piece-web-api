import { ICommandHandler } from '@nestjs/cqrs';
import { Sequelize } from 'sequelize-typescript';
import { CreateCharacterVersionsBulkCommand } from '../impl/create-character-versions-bulk.command';
import { CharacterVersion } from '../../models/character-version.model';
import { Character } from '../../../characters/models/character.model';
import { Arc } from '../../../arcs/models/arc.model';
import { ArcCharacterVersion } from '../../../arcs/models/arc-character-version.model';
export declare class CreateCharacterVersionsBulkHandler implements ICommandHandler<CreateCharacterVersionsBulkCommand> {
    private readonly characterVersionModel;
    private readonly characterModel;
    private readonly arcModel;
    private readonly pivotModel;
    private readonly sequelize;
    constructor(characterVersionModel: typeof CharacterVersion, characterModel: typeof Character, arcModel: typeof Arc, pivotModel: typeof ArcCharacterVersion, sequelize: Sequelize);
    execute(command: CreateCharacterVersionsBulkCommand): Promise<CharacterVersion[]>;
}
