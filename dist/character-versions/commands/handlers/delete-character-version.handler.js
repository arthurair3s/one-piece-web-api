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
exports.DeleteCharacterVersionHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const delete_character_version_command_1 = require("../impl/delete-character-version.command");
const character_version_model_1 = require("../../models/character-version.model");
let DeleteCharacterVersionHandler = class DeleteCharacterVersionHandler {
    constructor(characterVersionModel) {
        this.characterVersionModel = characterVersionModel;
    }
    async execute(command) {
        const version = await this.characterVersionModel.findByPk(command.id);
        if (!version) {
            throw new common_1.NotFoundException(`CharacterVersion com ID ${command.id} não encontrada`);
        }
        await version.destroy();
        return { success: true, message: `CharacterVersion com ID ${command.id} foi removida com sucesso` };
    }
};
exports.DeleteCharacterVersionHandler = DeleteCharacterVersionHandler;
exports.DeleteCharacterVersionHandler = DeleteCharacterVersionHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_character_version_command_1.DeleteCharacterVersionCommand),
    __param(0, (0, sequelize_1.InjectModel)(character_version_model_1.CharacterVersion)),
    __metadata("design:paramtypes", [Object])
], DeleteCharacterVersionHandler);
//# sourceMappingURL=delete-character-version.handler.js.map