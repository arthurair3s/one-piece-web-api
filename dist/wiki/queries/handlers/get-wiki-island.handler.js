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
exports.GetWikiIslandHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const sequelize_typescript_1 = require("sequelize-typescript");
const get_wiki_island_query_1 = require("../impl/get-wiki-island.query");
const island_read_model_1 = require("../../../islands/models/island-read.model");
const arc_island_read_model_1 = require("../../../arcs/models/arc-island-read.model");
const arc_read_model_1 = require("../../../arcs/models/arc-read.model");
const saga_read_model_1 = require("../../../sagas/models/saga-read.model");
let GetWikiIslandHandler = class GetWikiIslandHandler {
    constructor(islandReadModel, arcIslandReadModel) {
        this.islandReadModel = islandReadModel;
        this.arcIslandReadModel = arcIslandReadModel;
    }
    async execute(query) {
        const { islandId, sagaId, arcId } = query;
        const island = await this.islandReadModel.findByPk(islandId, {
            attributes: ['id', 'name', 'description', 'thumbnail_url',
                'coordinate_x', 'coordinate_y', 'coordinate_z'],
        });
        if (!island || island.is_active === false) {
            throw new common_1.NotFoundException('Ilha não encontrada');
        }
        const arcWhere = {};
        if (sagaId)
            arcWhere.saga_id = sagaId;
        if (arcId)
            arcWhere.id = arcId;
        const arcIslands = await this.arcIslandReadModel.findAll({
            where: { island_id: islandId },
            attributes: [
                'id',
                [
                    sequelize_typescript_1.Sequelize.literal('(SELECT COUNT(*) FROM events WHERE events.arc_island_id = "ArcIslandRead".id AND events."deletedAt" IS NULL)'),
                    'eventsCount',
                ],
            ],
            include: [
                {
                    model: arc_read_model_1.ArcRead,
                    where: Object.keys(arcWhere).length > 0 ? arcWhere : undefined,
                    attributes: ['id', 'name', 'order'],
                    include: [
                        {
                            model: saga_read_model_1.SagaRead,
                            attributes: ['name'],
                        },
                    ],
                },
            ],
        });
        arcIslands.sort((a, b) => {
            const orderA = a.arc?.order ?? 0;
            const orderB = b.arc?.order ?? 0;
            return orderA - orderB;
        });
        return {
            id: island.id,
            name: island.name,
            description: island.description,
            thumbnailUrl: island.thumbnail_url,
            coordinates: {
                x: island.coordinate_x,
                y: island.coordinate_y,
                z: island.coordinate_z,
            },
            arcs: arcIslands.map((ai) => ({
                id: ai.arc.id,
                name: ai.arc.name,
                sagaName: ai.arc.saga?.name,
                order: ai.arc.order,
                eventsCount: parseInt(ai.getDataValue('eventsCount'), 10) || 0,
            })),
        };
    }
};
exports.GetWikiIslandHandler = GetWikiIslandHandler;
exports.GetWikiIslandHandler = GetWikiIslandHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_wiki_island_query_1.GetWikiIslandQuery),
    __param(0, (0, sequelize_1.InjectModel)(island_read_model_1.IslandRead, 'read-db')),
    __param(1, (0, sequelize_1.InjectModel)(arc_island_read_model_1.ArcIslandRead, 'read-db')),
    __metadata("design:paramtypes", [Object, Object])
], GetWikiIslandHandler);
//# sourceMappingURL=get-wiki-island.handler.js.map