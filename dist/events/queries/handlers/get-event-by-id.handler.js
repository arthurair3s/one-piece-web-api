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
exports.GetEventByIdHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const get_event_by_id_query_1 = require("../impl/get-event-by-id.query");
const event_read_model_1 = require("../../models/event-read.model");
const character_version_read_model_1 = require("../../../character-versions/models/character-version-read.model");
const character_read_model_1 = require("../../../characters/models/character-read.model");
let GetEventByIdHandler = class GetEventByIdHandler {
    constructor(eventReadModel) {
        this.eventReadModel = eventReadModel;
    }
    async execute(query) {
        const event = await this.eventReadModel.findByPk(query.id, {
            include: [
                {
                    model: character_version_read_model_1.CharacterVersionRead,
                    as: 'participants',
                    through: { attributes: [] },
                    include: [{ model: character_read_model_1.CharacterRead }],
                },
            ],
        });
        if (!event) {
            throw new common_1.NotFoundException(`Evento com ID ${query.id} não encontrado.`);
        }
        return event;
    }
};
exports.GetEventByIdHandler = GetEventByIdHandler;
exports.GetEventByIdHandler = GetEventByIdHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_event_by_id_query_1.GetEventByIdQuery),
    __param(0, (0, sequelize_1.InjectModel)(event_read_model_1.EventRead, 'read-db')),
    __metadata("design:paramtypes", [Object])
], GetEventByIdHandler);
//# sourceMappingURL=get-event-by-id.handler.js.map