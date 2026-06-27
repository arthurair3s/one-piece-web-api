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
exports.DeleteArcHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const delete_arc_command_1 = require("../impl/delete-arc.command");
const arc_model_1 = require("../../models/arc.model");
const island_model_1 = require("../../../islands/models/island.model");
let DeleteArcHandler = class DeleteArcHandler {
    constructor(arcModel, islandModel) {
        this.arcModel = arcModel;
        this.islandModel = islandModel;
    }
    async execute(command) {
        const { id } = command;
        const arc = await this.arcModel.findByPk(id);
        if (!arc) {
            throw new common_1.NotFoundException('Arc não encontrado');
        }
        const arcWithIslands = await this.arcModel.findByPk(id, {
            include: [{ model: island_model_1.Island, attributes: ['id'] }],
        });
        if (arcWithIslands?.islands && arcWithIslands.islands.length > 0) {
            throw new common_1.BadRequestException('Não é possível deletar um arco que possui ilhas vinculadas');
        }
        await arc.destroy();
    }
};
exports.DeleteArcHandler = DeleteArcHandler;
exports.DeleteArcHandler = DeleteArcHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_arc_command_1.DeleteArcCommand),
    __param(0, (0, sequelize_1.InjectModel)(arc_model_1.Arc)),
    __param(1, (0, sequelize_1.InjectModel)(island_model_1.Island)),
    __metadata("design:paramtypes", [Object, Object])
], DeleteArcHandler);
//# sourceMappingURL=delete-arc.handler.js.map