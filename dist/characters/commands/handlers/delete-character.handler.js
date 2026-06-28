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
exports.DeleteCharacterHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const delete_character_command_1 = require("../impl/delete-character.command");
const character_model_1 = require("../../models/character.model");
const character_version_model_1 = require("../../../character-versions/models/character-version.model");
let DeleteCharacterHandler = class DeleteCharacterHandler {
    constructor(characterModel, characterVersionModel) {
        this.characterModel = characterModel;
        this.characterVersionModel = characterVersionModel;
    }
    async execute(command) {
        const character = await this.characterModel.findByPk(command.id);
        if (!character) {
            throw new common_1.NotFoundException(`Character com ID ${command.id} não encontrado`);
        }
        const versions = await this.characterVersionModel.findOne({
            where: { character_id: command.id }
        });
        if (versions) {
            throw new common_1.BadRequestException('Não é possível deletar um personagem que possui versões vinculadas');
        }
        await character.destroy();
        return { success: true, message: `Character com ID ${command.id} foi removido com sucesso` };
    }
};
exports.DeleteCharacterHandler = DeleteCharacterHandler;
exports.DeleteCharacterHandler = DeleteCharacterHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_character_command_1.DeleteCharacterCommand),
    __param(0, (0, sequelize_1.InjectModel)(character_model_1.Character)),
    __param(1, (0, sequelize_1.InjectModel)(character_version_model_1.CharacterVersion)),
    __metadata("design:paramtypes", [Object, Object])
], DeleteCharacterHandler);
//# sourceMappingURL=delete-character.handler.js.map