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
exports.CreateIslandsBulkHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_2 = require("sequelize");
const create_islands_bulk_command_1 = require("../impl/create-islands-bulk.command");
const island_model_1 = require("../../models/island.model");
const arc_model_1 = require("../../../arcs/models/arc.model");
const arc_island_model_1 = require("../../../arcs/models/arc-island.model");
let CreateIslandsBulkHandler = class CreateIslandsBulkHandler {
    constructor(islandModel, arcModel, arcIslandModel, sequelize) {
        this.islandModel = islandModel;
        this.arcModel = arcModel;
        this.arcIslandModel = arcIslandModel;
        this.sequelize = sequelize;
    }
    async execute(command) {
        const { islands } = command;
        const allArcIds = [...new Set(islands.flatMap(i => (i.arc_ids || []).map(a => a.arc_id)))];
        if (allArcIds.length > 0) {
            const foundArcs = await this.arcModel.findAll({
                where: { id: { [sequelize_2.Op.in]: allArcIds } }
            });
            if (foundArcs.length !== allArcIds.length) {
                const foundIds = foundArcs.map(a => a.id);
                const missingIds = allArcIds.filter(id => !foundIds.includes(id));
                throw new common_1.NotFoundException(`Arcos com IDs [${missingIds.join(', ')}] não encontrados.`);
            }
        }
        return this.sequelize.transaction(async (t) => {
            try {
                const createdIslands = [];
                for (const dto of islands) {
                    const island = await this.islandModel.create({
                        name: dto.name,
                        description: dto.description,
                        coordinate_x: dto.coordinate_x,
                        coordinate_y: dto.coordinate_y,
                        coordinate_z: dto.coordinate_z,
                        model_url: dto.model_url,
                        thumbnail_url: dto.thumbnail_url,
                        is_active: dto.is_active ?? true,
                    }, { transaction: t });
                    if (dto.arc_ids && dto.arc_ids.length > 0) {
                        const pivots = dto.arc_ids.map((assoc) => {
                            return {
                                arc_id: assoc.arc_id,
                                island_id: island.id,
                                order: assoc.order,
                            };
                        });
                        await this.arcIslandModel.bulkCreate(pivots, { transaction: t });
                    }
                    createdIslands.push(island);
                }
                return createdIslands;
            }
            catch (error) {
                if (error instanceof sequelize_2.UniqueConstraintError) {
                    throw new common_1.ConflictException('Erro ao criar ilhas em lote: Conflito de nome ou vínculos duplicados.');
                }
                throw error;
            }
        });
    }
};
exports.CreateIslandsBulkHandler = CreateIslandsBulkHandler;
exports.CreateIslandsBulkHandler = CreateIslandsBulkHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_islands_bulk_command_1.CreateIslandsBulkCommand),
    __param(0, (0, sequelize_1.InjectModel)(island_model_1.Island)),
    __param(1, (0, sequelize_1.InjectModel)(arc_model_1.Arc)),
    __param(2, (0, sequelize_1.InjectModel)(arc_island_model_1.ArcIsland)),
    __metadata("design:paramtypes", [Object, Object, Object, sequelize_typescript_1.Sequelize])
], CreateIslandsBulkHandler);
//# sourceMappingURL=create-islands-bulk.handler.js.map