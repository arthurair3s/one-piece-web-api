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
exports.GetEventsHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const get_events_query_1 = require("../impl/get-events.query");
const event_read_model_1 = require("../../models/event-read.model");
let GetEventsHandler = class GetEventsHandler {
    constructor(eventReadModel) {
        this.eventReadModel = eventReadModel;
    }
    async execute(query) {
        const { page = 1, limit = 10, arcIslandId, type } = query;
        const offset = (page - 1) * limit;
        const where = {};
        if (arcIslandId) {
            where.arc_island_id = arcIslandId;
        }
        if (type) {
            where.type = type;
        }
        return this.eventReadModel.findAndCountAll({
            where,
            limit: Number(limit),
            offset: Number(offset),
            distinct: true,
            subQuery: false,
            order: [['order', 'ASC']],
        });
    }
};
exports.GetEventsHandler = GetEventsHandler;
exports.GetEventsHandler = GetEventsHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_events_query_1.GetEventsQuery),
    __param(0, (0, sequelize_1.InjectModel)(event_read_model_1.EventRead, 'read-db')),
    __metadata("design:paramtypes", [Object])
], GetEventsHandler);
//# sourceMappingURL=get-events.handler.js.map