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
exports.CreateEventHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const create_event_command_1 = require("../impl/create-event.command");
const event_model_1 = require("../../models/event.model");
const arc_island_model_1 = require("../../../arcs/models/arc-island.model");
const common_1 = require("@nestjs/common");
let CreateEventHandler = class CreateEventHandler {
    constructor(eventModel, arcIslandModel) {
        this.eventModel = eventModel;
        this.arcIslandModel = arcIslandModel;
    }
    async execute(command) {
        const { arcIslandId, title, type, description, order } = command;
        const arcIsland = await this.arcIslandModel.findByPk(arcIslandId);
        if (!arcIsland) {
            throw new common_1.NotFoundException(`Contexto (arcIslandId) ${arcIslandId} não encontrado.`);
        }
        const existing = await this.eventModel.findOne({
            where: { arc_island_id: arcIslandId, order },
        });
        if (existing) {
            throw new common_1.ConflictException(`Já existe um evento com a ordem ${order} neste contexto arco-ilha.`);
        }
        return this.eventModel.create({
            arc_island_id: arcIslandId,
            title,
            type,
            description,
            order,
        });
    }
};
exports.CreateEventHandler = CreateEventHandler;
exports.CreateEventHandler = CreateEventHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_event_command_1.CreateEventCommand),
    __param(0, (0, sequelize_1.InjectModel)(event_model_1.Event)),
    __param(1, (0, sequelize_1.InjectModel)(arc_island_model_1.ArcIsland)),
    __metadata("design:paramtypes", [Object, Object])
], CreateEventHandler);
//# sourceMappingURL=create-event.handler.js.map