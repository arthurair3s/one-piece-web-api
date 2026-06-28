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
exports.RemoveParticipantFromEventHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const remove_participant_from_event_command_1 = require("../impl/remove-participant-from-event.command");
const event_participant_model_1 = require("../../models/event-participant.model");
let RemoveParticipantFromEventHandler = class RemoveParticipantFromEventHandler {
    constructor(eventParticipantModel) {
        this.eventParticipantModel = eventParticipantModel;
    }
    async execute(command) {
        const { event_id, character_version_id } = command;
        const participant = await this.eventParticipantModel.findOne({
            where: { event_id, character_version_id },
        });
        if (!participant) {
            throw new common_1.NotFoundException('Participante não encontrado neste evento');
        }
        await participant.destroy();
    }
};
exports.RemoveParticipantFromEventHandler = RemoveParticipantFromEventHandler;
exports.RemoveParticipantFromEventHandler = RemoveParticipantFromEventHandler = __decorate([
    (0, cqrs_1.CommandHandler)(remove_participant_from_event_command_1.RemoveParticipantFromEventCommand),
    __param(0, (0, sequelize_1.InjectModel)(event_participant_model_1.EventParticipant)),
    __metadata("design:paramtypes", [Object])
], RemoveParticipantFromEventHandler);
//# sourceMappingURL=remove-participant-from-event.handler.js.map