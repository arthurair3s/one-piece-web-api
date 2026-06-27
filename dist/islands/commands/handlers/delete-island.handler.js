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
exports.DeleteIslandHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const delete_island_command_1 = require("../impl/delete-island.command");
const island_model_1 = require("../../models/island.model");
let DeleteIslandHandler = class DeleteIslandHandler {
    constructor(islandModel) {
        this.islandModel = islandModel;
    }
    async execute(command) {
        const { id } = command;
        const island = await this.islandModel.findByPk(id);
        if (!island) {
            throw new common_1.NotFoundException('Island não encontrada');
        }
        await island.destroy();
    }
};
exports.DeleteIslandHandler = DeleteIslandHandler;
exports.DeleteIslandHandler = DeleteIslandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_island_command_1.DeleteIslandCommand),
    __param(0, (0, sequelize_1.InjectModel)(island_model_1.Island)),
    __metadata("design:paramtypes", [Object])
], DeleteIslandHandler);
//# sourceMappingURL=delete-island.handler.js.map