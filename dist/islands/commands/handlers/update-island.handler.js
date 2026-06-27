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
exports.UpdateIslandHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_2 = require("sequelize");
const update_island_command_1 = require("../impl/update-island.command");
const island_model_1 = require("../../models/island.model");
const arc_model_1 = require("../../../arcs/models/arc.model");
const arc_island_model_1 = require("../../../arcs/models/arc-island.model");
let UpdateIslandHandler = class UpdateIslandHandler {
    constructor(islandModel, arcModel, arcIslandModel, sequelize) {
        this.islandModel = islandModel;
        this.arcModel = arcModel;
        this.arcIslandModel = arcIslandModel;
        this.sequelize = sequelize;
    }
    async execute(command) {
        const { id, name, description, arc_ids, coordinate_x, coordinate_y, coordinate_z, model_url, thumbnail_url, is_active, rotation_y, scale, } = command;
        const island = await this.islandModel.findByPk(id);
        if (!island) {
            throw new common_1.NotFoundException('Ilha não encontrada');
        }
        return this.sequelize.transaction(async (t) => {
            await island.update({
                name: name ?? island.name,
                description: description ?? island.description,
                coordinate_x: coordinate_x ?? island.coordinate_x,
                coordinate_y: coordinate_y ?? island.coordinate_y,
                coordinate_z: coordinate_z ?? island.coordinate_z,
                model_url: model_url ?? island.model_url,
                thumbnail_url: thumbnail_url ?? island.thumbnail_url,
                is_active: is_active ?? island.is_active,
                rotation_y: rotation_y ?? island.rotation_y,
                scale: scale ?? island.scale,
            }, { transaction: t });
            if (arc_ids !== undefined) {
                const targetArcIds = arc_ids.map(a => a.arc_id);
                if (targetArcIds.length > 0) {
                    const foundArcs = await this.arcModel.findAll({
                        where: { id: { [sequelize_2.Op.in]: targetArcIds } },
                        transaction: t
                    });
                    if (foundArcs.length !== targetArcIds.length) {
                        const foundIds = foundArcs.map(a => a.id);
                        const missingIds = targetArcIds.filter(id => !foundIds.includes(id));
                        throw new common_1.NotFoundException(`Arcos com IDs [${missingIds.join(', ')}] não encontrados.`);
                    }
                }
                await this.arcIslandModel.destroy({
                    where: {
                        island_id: id,
                        arc_id: { [sequelize_2.Op.notIn]: targetArcIds }
                    },
                    transaction: t
                });
                const existingPivots = await this.arcIslandModel.findAll({
                    where: { island_id: id },
                    paranoid: false,
                    transaction: t
                });
                for (const assoc of arc_ids) {
                    const existing = existingPivots.find(p => p.arc_id === assoc.arc_id);
                    if (existing) {
                        if (existing.deletedAt) {
                            await existing.restore({ transaction: t });
                        }
                        await existing.update({ order: assoc.order }, { transaction: t });
                    }
                    else {
                        await this.arcIslandModel.create({
                            arc_id: assoc.arc_id,
                            island_id: id,
                            order: assoc.order,
                        }, { transaction: t });
                    }
                }
            }
            return island;
        });
    }
};
exports.UpdateIslandHandler = UpdateIslandHandler;
exports.UpdateIslandHandler = UpdateIslandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_island_command_1.UpdateIslandCommand),
    __param(0, (0, sequelize_1.InjectModel)(island_model_1.Island)),
    __param(1, (0, sequelize_1.InjectModel)(arc_model_1.Arc)),
    __param(2, (0, sequelize_1.InjectModel)(arc_island_model_1.ArcIsland)),
    __metadata("design:paramtypes", [Object, Object, Object, sequelize_typescript_1.Sequelize])
], UpdateIslandHandler);
//# sourceMappingURL=update-island.handler.js.map