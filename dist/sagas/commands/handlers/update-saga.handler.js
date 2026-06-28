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
exports.UpdateSagaHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const update_saga_command_1 = require("../impl/update-saga.command");
const saga_model_1 = require("../../models/saga.model");
let UpdateSagaHandler = class UpdateSagaHandler {
    constructor(sagaModel) {
        this.sagaModel = sagaModel;
    }
    async execute(command) {
        const { id, name, order, description } = command;
        const saga = await this.sagaModel.findByPk(id);
        if (!saga) {
            throw new common_1.NotFoundException('Saga não encontrada');
        }
        if (order !== undefined) {
            const existingOrder = await this.sagaModel.findOne({
                where: { order },
            });
            if (existingOrder && existingOrder.id !== id) {
                throw new common_1.BadRequestException('Já existe uma saga com essa ordem');
            }
        }
        if (name !== undefined) {
            const existingName = await this.sagaModel.findOne({
                where: { name },
            });
            if (existingName && existingName.id !== id) {
                throw new common_1.BadRequestException('Já existe uma saga com esse nome');
            }
        }
        await saga.update({
            name: name ?? saga.name,
            order: order ?? saga.order,
            description: description !== undefined ? description : saga.description,
        });
        return saga;
    }
};
exports.UpdateSagaHandler = UpdateSagaHandler;
exports.UpdateSagaHandler = UpdateSagaHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_saga_command_1.UpdateSagaCommand),
    __param(0, (0, sequelize_1.InjectModel)(saga_model_1.Saga)),
    __metadata("design:paramtypes", [Object])
], UpdateSagaHandler);
//# sourceMappingURL=update-saga.handler.js.map