"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCharacterVersionHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const sequelize_typescript_1 = require("sequelize-typescript");
const update_character_version_command_1 = require("../impl/update-character-version.command");
const character_version_model_1 = require("../../models/character-version.model");
const character_model_1 = require("../../../characters/models/character.model");
const arc_character_version_model_1 = require("../../../arcs/models/arc-character-version.model");
let UpdateCharacterVersionHandler = class UpdateCharacterVersionHandler {
    constructor(characterVersionModel, characterModel, pivotModel, sequelize) {
        this.characterVersionModel = characterVersionModel;
        this.characterModel = characterModel;
        this.pivotModel = pivotModel;
        this.sequelize = sequelize;
    }
    async execute(command) {
        const { id, data } = command;
        const { character_id, arc_ids, ...updateData } = data;
        const version = await this.characterVersionModel.findByPk(id);
        if (!version) {
            throw new common_1.NotFoundException(`Versão de personagem com ID ${id} não encontrada`);
        }
        if (character_id) {
            const character = await this.characterModel.findByPk(character_id);
            if (!character) {
                throw new common_1.NotFoundException(`Personagem com ID ${character_id} não encontrado`);
            }
        }
        return this.sequelize.transaction(async (t) => {
            await version.update({ character_id, ...updateData }, { transaction: t });
            if (arc_ids !== undefined) {
                await this.pivotModel.destroy({
                    where: { character_version_id: id },
                    transaction: t
                });
                if (arc_ids.length > 0) {
                    const pivots = arc_ids.map(arc_id => ({
                        arc_id,
                        character_version_id: id,
                        character_id: character_id ?? version.character_id,
                        order: 0
                    }));
                    await this.pivotModel.bulkCreate(pivots, { transaction: t });
                }
            }
            return version;
        });
    }
};
exports.UpdateCharacterVersionHandler = UpdateCharacterVersionHandler;
exports.UpdateCharacterVersionHandler = UpdateCharacterVersionHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_character_version_command_1.UpdateCharacterVersionCommand),
    __param(0, (0, sequelize_1.InjectModel)(character_version_model_1.CharacterVersion)),
    __param(1, (0, sequelize_1.InjectModel)(character_model_1.Character)),
    __param(2, (0, sequelize_1.InjectModel)(arc_character_version_model_1.ArcCharacterVersion)),
    __metadata("design:paramtypes", [Object, Object, Object, sequelize_typescript_1.Sequelize])
], UpdateCharacterVersionHandler);
//# sourceMappingURL=update-character-version.handler.js.map