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
exports.CreateEventsBulkHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_2 = require("sequelize");
const create_events_bulk_command_1 = require("../impl/create-events-bulk.command");
const event_model_1 = require("../../models/event.model");
const arc_island_model_1 = require("../../../arcs/models/arc-island.model");
let CreateEventsBulkHandler = class CreateEventsBulkHandler {
    constructor(eventModel, arcIslandModel, sequelize) {
        this.eventModel = eventModel;
        this.arcIslandModel = arcIslandModel;
        this.sequelize = sequelize;
    }
    async execute(command) {
        const { events } = command;
        const arcIslandIds = [...new Set(events.map(e => e.arcIslandId))];
        const foundArcIslands = await this.arcIslandModel.findAll({
            where: { id: { [sequelize_2.Op.in]: arcIslandIds } },
        });
        if (foundArcIslands.length !== arcIslandIds.length) {
            const foundIds = foundArcIslands.map(i => i.id);
            const missingIds = arcIslandIds.filter(id => !foundIds.includes(id));
            throw new common_1.NotFoundException(`Contextos (arc_island_id) [${missingIds.join(', ')}] não encontrados.`);
        }
        return this.sequelize.transaction(async (t) => {
            try {
                const eventsToCreate = events.map(e => ({
                    ...e,
                    arc_island_id: e.arcIslandId,
                }));
                return await this.eventModel.bulkCreate(eventsToCreate, {
                    transaction: t,
                    validate: true
                });
            }
            catch (error) {
                if (error instanceof sequelize_2.UniqueConstraintError) {
                    throw new common_1.ConflictException('Erro ao criar eventos em lote: Conflito de ordem no mesmo contexto arco-ilha.');
                }
                throw error;
            }
        });
    }
};
exports.CreateEventsBulkHandler = CreateEventsBulkHandler;
exports.CreateEventsBulkHandler = CreateEventsBulkHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_events_bulk_command_1.CreateEventsBulkCommand),
    __param(0, (0, sequelize_1.InjectModel)(event_model_1.Event)),
    __param(1, (0, sequelize_1.InjectModel)(arc_island_model_1.ArcIsland)),
    __metadata("design:paramtypes", [Object, Object, sequelize_typescript_1.Sequelize])
], CreateEventsBulkHandler);
//# sourceMappingURL=create-events-bulk.handler.js.map