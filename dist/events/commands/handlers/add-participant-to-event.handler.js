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
exports.AddParticipantToEventHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const sequelize_2 = require("sequelize");
const add_participant_to_event_command_1 = require("../impl/add-participant-to-event.command");
const event_model_1 = require("../../models/event.model");
const event_participant_model_1 = require("../../models/event-participant.model");
const character_version_model_1 = require("../../../character-versions/models/character-version.model");
let AddParticipantToEventHandler = class AddParticipantToEventHandler {
    constructor(eventModel, characterVersionModel, eventParticipantModel) {
        this.eventModel = eventModel;
        this.characterVersionModel = characterVersionModel;
        this.eventParticipantModel = eventParticipantModel;
    }
    async execute(command) {
        const { event_id, character_version_id } = command;
        const event = await this.eventModel.findByPk(event_id);
        if (!event) {
            throw new common_1.NotFoundException(`Evento com ID ${event_id} não encontrado`);
        }
        const characterVersion = await this.characterVersionModel.findByPk(character_version_id);
        if (!characterVersion) {
            throw new common_1.NotFoundException(`Versão de personagem com ID ${character_version_id} não encontrada`);
        }
        try {
            return await this.eventParticipantModel.create({ event_id, character_version_id });
        }
        catch (error) {
            if (error instanceof sequelize_2.UniqueConstraintError) {
                throw new common_1.ConflictException('Este personagem já está vinculado a este evento.');
            }
            throw error;
        }
    }
};
exports.AddParticipantToEventHandler = AddParticipantToEventHandler;
exports.AddParticipantToEventHandler = AddParticipantToEventHandler = __decorate([
    (0, cqrs_1.CommandHandler)(add_participant_to_event_command_1.AddParticipantToEventCommand),
    __param(0, (0, sequelize_1.InjectModel)(event_model_1.Event)),
    __param(1, (0, sequelize_1.InjectModel)(character_version_model_1.CharacterVersion)),
    __param(2, (0, sequelize_1.InjectModel)(event_participant_model_1.EventParticipant)),
    __metadata("design:paramtypes", [Object, Object, Object])
], AddParticipantToEventHandler);
//# sourceMappingURL=add-participant-to-event.handler.js.map