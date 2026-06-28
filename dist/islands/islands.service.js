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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IslandsService = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const create_island_command_1 = require("./commands/impl/create-island.command");
const create_islands_bulk_command_1 = require("./commands/impl/create-islands-bulk.command");
const update_island_command_1 = require("./commands/impl/update-island.command");
const delete_island_command_1 = require("./commands/impl/delete-island.command");
const get_island_details_query_1 = require("./queries/impl/get-island-details.query");
const get_islands_query_1 = require("./queries/impl/get-islands.query");
const get_island_arcs_query_1 = require("./queries/impl/get-island-arcs.query");
const get_islands_map_query_1 = require("./queries/impl/get-islands-map.query");
let IslandsService = class IslandsService {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async create(dto) {
        return this.commandBus.execute(new create_island_command_1.CreateIslandCommand(dto.name, dto.description, dto.arc_ids, dto.coordinate_x, dto.coordinate_y, dto.coordinate_z, dto.model_url, dto.thumbnail_url, dto.is_active));
    }
    async createBulk(dtos) {
        return this.commandBus.execute(new create_islands_bulk_command_1.CreateIslandsBulkCommand(dtos));
    }
    async findAll(query) {
        return this.queryBus.execute(new get_islands_query_1.GetIslandsQuery(query.page ?? 1, query.limit ?? 10, query.arc_id, query.is_active));
    }
    async getMap() {
        return this.queryBus.execute(new get_islands_map_query_1.GetIslandsMapQuery());
    }
    async getArcs(islandId) {
        return this.queryBus.execute(new get_island_arcs_query_1.GetIslandArcsQuery(islandId));
    }
    async findDetails(id, arcId) {
        return this.queryBus.execute(new get_island_details_query_1.GetIslandDetailsQuery(id, arcId));
    }
    async update(id, dto) {
        return this.commandBus.execute(new update_island_command_1.UpdateIslandCommand(id, dto.name, dto.description, dto.arc_ids, dto.coordinate_x, dto.coordinate_y, dto.coordinate_z, dto.model_url, dto.thumbnail_url, dto.is_active, dto.rotation_y, dto.scale));
    }
    async remove(id) {
        return this.commandBus.execute(new delete_island_command_1.DeleteIslandCommand(id));
    }
};
exports.IslandsService = IslandsService;
exports.IslandsService = IslandsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], IslandsService);
//# sourceMappingURL=islands.service.js.map