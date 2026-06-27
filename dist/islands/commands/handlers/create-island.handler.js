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
exports.CreateIslandHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_2 = require("sequelize");
const create_island_command_1 = require("../impl/create-island.command");
const island_model_1 = require("../../models/island.model");
const arc_model_1 = require("../../../arcs/models/arc.model");
const arc_island_model_1 = require("../../../arcs/models/arc-island.model");
let CreateIslandHandler = class CreateIslandHandler {
    constructor(islandModel, arcModel, arcIslandModel, sequelize) {
        this.islandModel = islandModel;
        this.arcModel = arcModel;
        this.arcIslandModel = arcIslandModel;
        this.sequelize = sequelize;
    }
    async execute(command) {
        const { name, description, arc_ids, coordinate_x, coordinate_y, coordinate_z, model_url, thumbnail_url, is_active, } = command;
        for (const assoc of arc_ids) {
            const arc = await this.arcModel.findByPk(assoc.arc_id);
            if (!arc) {
                throw new common_1.NotFoundException(`Arco com ID ${assoc.arc_id} não encontrado`);
            }
        }
        return this.sequelize.transaction(async (t) => {
            try {
                const island = await this.islandModel.create({
                    name,
                    description,
                    coordinate_x,
                    coordinate_y,
                    coordinate_z,
                    model_url,
                    thumbnail_url,
                    is_active: is_active ?? true,
                }, { transaction: t });
                if (arc_ids && arc_ids.length > 0) {
                    const pivots = arc_ids.map((assoc) => {
                        return {
                            arc_id: assoc.arc_id,
                            island_id: island.id,
                            order: assoc.order,
                        };
                    });
                    await this.arcIslandModel.bulkCreate(pivots, { transaction: t });
                }
                return island;
            }
            catch (error) {
                if (error instanceof sequelize_2.UniqueConstraintError) {
                    throw new common_1.ConflictException(`Já existe uma ilha com o nome "${name}" ou conflito de vínculos.`);
                }
                throw error;
            }
        });
    }
};
exports.CreateIslandHandler = CreateIslandHandler;
exports.CreateIslandHandler = CreateIslandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_island_command_1.CreateIslandCommand),
    __param(0, (0, sequelize_1.InjectModel)(island_model_1.Island)),
    __param(1, (0, sequelize_1.InjectModel)(arc_model_1.Arc)),
    __param(2, (0, sequelize_1.InjectModel)(arc_island_model_1.ArcIsland)),
    __metadata("design:paramtypes", [Object, Object, Object, sequelize_typescript_1.Sequelize])
], CreateIslandHandler);
//# sourceMappingURL=create-island.handler.js.map