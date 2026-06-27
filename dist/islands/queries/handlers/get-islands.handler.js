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
exports.GetIslandsHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const get_islands_query_1 = require("../impl/get-islands.query");
const island_read_model_1 = require("../../models/island-read.model");
const arc_read_model_1 = require("../../../arcs/models/arc-read.model");
let GetIslandsHandler = class GetIslandsHandler {
    constructor(islandModel) {
        this.islandModel = islandModel;
    }
    async execute(query) {
        const { page = 1, limit = 10, arc_id, is_active } = query;
        const offset = (page - 1) * limit;
        const where = {
            is_active: is_active !== undefined ? is_active : true,
        };
        const include = [];
        if (arc_id) {
            include.push({
                model: arc_read_model_1.ArcRead,
                where: { id: arc_id },
                through: { attributes: [] },
                required: true,
            });
        }
        const { rows, count } = await this.islandModel.findAndCountAll({
            where,
            attributes: [
                'id',
                'name',
                'coordinate_x',
                'coordinate_y',
                'coordinate_z',
                'model_url',
                'thumbnail_url',
            ],
            include,
            limit,
            offset,
            distinct: true,
            subQuery: false,
            order: [['name', 'ASC']],
        });
        return {
            data: rows.map((island) => ({
                id: island.id,
                name: island.name,
                model_url: island.model_url,
                thumbnail_url: island.thumbnail_url,
                coordinates: {
                    x: island.coordinate_x,
                    y: island.coordinate_y,
                    z: island.coordinate_z,
                },
            })),
            meta: {
                total: count,
                page,
                last_page: Math.ceil(count / limit),
            },
        };
    }
};
exports.GetIslandsHandler = GetIslandsHandler;
exports.GetIslandsHandler = GetIslandsHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_islands_query_1.GetIslandsQuery),
    __param(0, (0, sequelize_1.InjectModel)(island_read_model_1.IslandRead, 'read-db')),
    __metadata("design:paramtypes", [Object])
], GetIslandsHandler);
//# sourceMappingURL=get-islands.handler.js.map