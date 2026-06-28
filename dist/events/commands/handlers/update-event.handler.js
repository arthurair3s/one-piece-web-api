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
exports.UpdateEventHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const update_event_command_1 = require("../impl/update-event.command");
const event_model_1 = require("../../models/event.model");
const arc_island_model_1 = require("../../../arcs/models/arc-island.model");
let UpdateEventHandler = class UpdateEventHandler {
    constructor(eventModel, arcIslandModel) {
        this.eventModel = eventModel;
        this.arcIslandModel = arcIslandModel;
    }
    async execute(command) {
        const { id, arcIslandId, ...data } = command;
        const event = await this.eventModel.findByPk(id);
        if (!event) {
            throw new common_1.NotFoundException(`Event com ID ${id} não encontrado.`);
        }
        let updateData = { ...data };
        if (arcIslandId) {
            const arcIsland = await this.arcIslandModel.findByPk(arcIslandId);
            if (!arcIsland) {
                throw new common_1.NotFoundException(`Contexto arco-ilha com ID ${arcIslandId} não encontrado.`);
            }
            updateData.arc_island_id = arcIslandId;
        }
        return event.update(updateData);
    }
};
exports.UpdateEventHandler = UpdateEventHandler;
exports.UpdateEventHandler = UpdateEventHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_event_command_1.UpdateEventCommand),
    __param(0, (0, sequelize_1.InjectModel)(event_model_1.Event)),
    __param(1, (0, sequelize_1.InjectModel)(arc_island_model_1.ArcIsland)),
    __metadata("design:paramtypes", [Object, Object])
], UpdateEventHandler);
//# sourceMappingURL=update-event.handler.js.map