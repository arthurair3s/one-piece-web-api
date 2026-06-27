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
exports.DeleteEventHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const delete_event_command_1 = require("../impl/delete-event.command");
const event_model_1 = require("../../models/event.model");
const event_participant_model_1 = require("../../models/event-participant.model");
const sequelize_typescript_1 = require("sequelize-typescript");
let DeleteEventHandler = class DeleteEventHandler {
    constructor(eventModel, eventParticipantModel, sequelize) {
        this.eventModel = eventModel;
        this.eventParticipantModel = eventParticipantModel;
        this.sequelize = sequelize;
    }
    async execute(command) {
        const { id } = command;
        const event = await this.eventModel.findByPk(id);
        if (!event) {
            throw new common_1.NotFoundException(`Event com ID ${id} não encontrado.`);
        }
        await this.sequelize.transaction(async (t) => {
            await this.eventParticipantModel.destroy({
                where: { event_id: id },
                transaction: t,
            });
            await event.destroy({ transaction: t });
        });
    }
};
exports.DeleteEventHandler = DeleteEventHandler;
exports.DeleteEventHandler = DeleteEventHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_event_command_1.DeleteEventCommand),
    __param(0, (0, sequelize_1.InjectModel)(event_model_1.Event)),
    __param(1, (0, sequelize_1.InjectModel)(event_participant_model_1.EventParticipant)),
    __metadata("design:paramtypes", [Object, Object, sequelize_typescript_1.Sequelize])
], DeleteEventHandler);
//# sourceMappingURL=delete-event.handler.js.map