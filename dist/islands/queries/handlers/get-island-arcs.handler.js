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
exports.GetIslandArcsHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const island_read_model_1 = require("../../models/island-read.model");
const arc_read_model_1 = require("../../../arcs/models/arc-read.model");
const get_island_arcs_query_1 = require("../impl/get-island-arcs.query");
let GetIslandArcsHandler = class GetIslandArcsHandler {
    constructor(islandModel) {
        this.islandModel = islandModel;
    }
    async execute(query) {
        const island = await this.islandModel.findByPk(query.islandId, {
            include: [
                {
                    model: arc_read_model_1.ArcRead,
                    attributes: ['id', 'name'],
                    through: { attributes: ['order'] },
                },
            ],
        });
        if (!island) {
            throw new common_1.NotFoundException('Ilha não encontrada');
        }
        const arcs = (island.arcs || [])
            .map((a) => ({
            id: a.id,
            name: a.name,
            order: a.arc_islands?.order ?? 0,
        }))
            .sort((a, b) => a.order - b.order);
        return {
            island: {
                id: island.id,
                name: island.name,
            },
            arcs,
        };
    }
};
exports.GetIslandArcsHandler = GetIslandArcsHandler;
exports.GetIslandArcsHandler = GetIslandArcsHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_island_arcs_query_1.GetIslandArcsQuery),
    __param(0, (0, sequelize_1.InjectModel)(island_read_model_1.IslandRead, 'read-db')),
    __metadata("design:paramtypes", [Object])
], GetIslandArcsHandler);
//# sourceMappingURL=get-island-arcs.handler.js.map