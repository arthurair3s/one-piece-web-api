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
exports.CreateCharacterVersionHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const sequelize_typescript_1 = require("sequelize-typescript");
const create_character_version_command_1 = require("../impl/create-character-version.command");
const character_version_model_1 = require("../../models/character-version.model");
const character_model_1 = require("../../../characters/models/character.model");
const arc_model_1 = require("../../../arcs/models/arc.model");
const arc_character_version_model_1 = require("../../../arcs/models/arc-character-version.model");
let CreateCharacterVersionHandler = class CreateCharacterVersionHandler {
    constructor(characterVersionModel, characterModel, arcModel, pivotModel, sequelize) {
        this.characterVersionModel = characterVersionModel;
        this.characterModel = characterModel;
        this.arcModel = arcModel;
        this.pivotModel = pivotModel;
        this.sequelize = sequelize;
    }
    async execute(command) {
        const { character_id, arc_ids, ...versionData } = command.data;
        const character = await this.characterModel.findByPk(character_id);
        if (!character) {
            throw new common_1.NotFoundException(`Personagem com ID ${character_id} não encontrado`);
        }
        return this.sequelize.transaction(async (t) => {
            const version = await this.characterVersionModel.create({
                character_id,
                ...versionData,
            }, { transaction: t });
            if (arc_ids && arc_ids.length > 0) {
                const pivots = arc_ids.map(arc_id => ({
                    arc_id,
                    character_version_id: version.id,
                    character_id,
                    order: 0,
                }));
                await this.pivotModel.bulkCreate(pivots, { transaction: t });
            }
            return version;
        });
    }
};
exports.CreateCharacterVersionHandler = CreateCharacterVersionHandler;
exports.CreateCharacterVersionHandler = CreateCharacterVersionHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_character_version_command_1.CreateCharacterVersionCommand),
    __param(0, (0, sequelize_1.InjectModel)(character_version_model_1.CharacterVersion)),
    __param(1, (0, sequelize_1.InjectModel)(character_model_1.Character)),
    __param(2, (0, sequelize_1.InjectModel)(arc_model_1.Arc)),
    __param(3, (0, sequelize_1.InjectModel)(arc_character_version_model_1.ArcCharacterVersion)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, sequelize_typescript_1.Sequelize])
], CreateCharacterVersionHandler);
//# sourceMappingURL=create-character-version.handler.js.map