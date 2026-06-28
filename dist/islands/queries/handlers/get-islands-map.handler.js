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
exports.GetIslandsMapHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const island_read_model_1 = require("../../models/island-read.model");
const get_islands_map_query_1 = require("../impl/get-islands-map.query");
let GetIslandsMapHandler = class GetIslandsMapHandler {
    constructor(islandModel) {
        this.islandModel = islandModel;
    }
    async execute() {
        const islands = await this.islandModel.findAll({
            where: { is_active: true },
            attributes: [
                'id',
                'name',
                'coordinate_x',
                'coordinate_y',
                'coordinate_z',
                'model_url',
                'thumbnail_url',
                'rotation_y',
                'scale',
            ],
            order: [['name', 'ASC']],
        });
        return islands.map((i) => ({
            id: i.id,
            name: i.name,
            model_url: i.model_url,
            thumbnail_url: i.thumbnail_url,
            rotation_y: i.rotation_y,
            scale: i.scale,
            coordinates: {
                x: i.coordinate_x,
                y: i.coordinate_y,
                z: i.coordinate_z,
            },
        }));
    }
};
exports.GetIslandsMapHandler = GetIslandsMapHandler;
exports.GetIslandsMapHandler = GetIslandsMapHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_islands_map_query_1.GetIslandsMapQuery),
    __param(0, (0, sequelize_1.InjectModel)(island_read_model_1.IslandRead, 'read-db')),
    __metadata("design:paramtypes", [Object])
], GetIslandsMapHandler);
//# sourceMappingURL=get-islands-map.handler.js.map