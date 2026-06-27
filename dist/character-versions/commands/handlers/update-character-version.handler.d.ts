import { ICommandHandler } from '@nestjs/cqrs';
import { Sequelize } from 'sequelize-typescript';
import { UpdateCharacterVersionCommand } from '../impl/update-character-version.command';
import { CharacterVersion } from '../../models/character-version.model';
import { Character } from '../../../characters/models/character.model';
import { ArcCharacterVersion } from '../../../arcs/models/arc-character-version.model';
export declare class UpdateCharacterVersionHandler implements ICommandHandler<UpdateCharacterVersionCommand> {
    private readonly characterVersionModel;
    private readonly characterModel;
    private readonly pivotModel;
    private readonly sequelize;
    constructor(characterVersionModel: typeof CharacterVersion, characterModel: typeof Character, pivotModel: typeof ArcCharacterVersion, sequelize: Sequelize);
    execute(command: UpdateCharacterVersionCommand): Promise<void>;
}
