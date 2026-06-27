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
exports.GetWikiMapFilteredHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_2 = require("sequelize");
const get_wiki_map_filtered_query_1 = require("../impl/get-wiki-map-filtered.query");
const island_read_model_1 = require("../../../islands/models/island-read.model");
let GetWikiMapFilteredHandler = class GetWikiMapFilteredHandler {
    constructor(islandReadModel) {
        this.islandReadModel = islandReadModel;
    }
    async execute(query) {
        const { sagaId, arcId, search } = query;
        const where = { is_active: true };
        if (search) {
            where.name = { [sequelize_2.Op.iLike]: `%${search}%` };
        }
        if (arcId) {
            where.id = {
                ...(where.id || {}),
                [sequelize_2.Op.in]: sequelize_typescript_1.Sequelize.literal(`(SELECT island_id FROM arc_islands WHERE arc_id = ${Number(arcId)} AND "deletedAt" IS NULL)`),
            };
        }
        else if (sagaId) {
            where.id = {
                ...(where.id || {}),
                [sequelize_2.Op.in]: sequelize_typescript_1.Sequelize.literal(`(SELECT ai.island_id FROM arc_islands ai ` +
                    `JOIN arcs a ON a.id = ai.arc_id AND a."deletedAt" IS NULL ` +
                    `WHERE a.saga_id = ${Number(sagaId)} AND ai."deletedAt" IS NULL)`),
            };
        }
        const islands = await this.islandReadModel.findAll({
            where,
            attributes: [
                'id', 'name', 'thumbnail_url', 'model_url', 'coordinate_x', 'coordinate_y', 'coordinate_z',
                [
                    sequelize_typescript_1.Sequelize.literal('(SELECT COUNT(*) FROM arc_islands WHERE arc_islands.island_id = "IslandRead".id AND arc_islands."deletedAt" IS NULL)'),
                    'arcCount',
                ],
            ],
        });
        return {
            islands: islands.map((i) => ({
                id: i.id,
                name: i.name,
                thumbnailUrl: i.thumbnail_url,
                model_url: i.model_url,
                coordinates: {
                    x: i.coordinate_x,
                    y: i.coordinate_y,
                    z: i.coordinate_z,
                },
                arcCount: parseInt(i.getDataValue('arcCount'), 10) || 0,
            })),
            meta: { total: islands.length },
        };
    }
};
exports.GetWikiMapFilteredHandler = GetWikiMapFilteredHandler;
exports.GetWikiMapFilteredHandler = GetWikiMapFilteredHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_wiki_map_filtered_query_1.GetWikiMapFilteredQuery),
    __param(0, (0, sequelize_1.InjectModel)(island_read_model_1.IslandRead, 'read-db')),
    __metadata("design:paramtypes", [Object])
], GetWikiMapFilteredHandler);
//# sourceMappingURL=get-wiki-map-filtered.handler.js.map