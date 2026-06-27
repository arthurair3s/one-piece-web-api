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
exports.CreateCharacterHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const sequelize_2 = require("sequelize");
const create_character_command_1 = require("../impl/create-character.command");
const character_model_1 = require("../../models/character.model");
let CreateCharacterHandler = class CreateCharacterHandler {
    constructor(characterModel) {
        this.characterModel = characterModel;
    }
    async execute(command) {
        try {
            return await this.characterModel.create(command.data);
        }
        catch (error) {
            if (error instanceof sequelize_2.UniqueConstraintError) {
                throw new common_1.ConflictException(`Um personagem com o slug "${command.data.slug}" já existe.`);
            }
            throw error;
        }
    }
};
exports.CreateCharacterHandler = CreateCharacterHandler;
exports.CreateCharacterHandler = CreateCharacterHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_character_command_1.CreateCharacterCommand),
    __param(0, (0, sequelize_1.InjectModel)(character_model_1.Character)),
    __metadata("design:paramtypes", [Object])
], CreateCharacterHandler);
//# sourceMappingURL=create-character.handler.js.map