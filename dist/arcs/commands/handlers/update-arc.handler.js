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
exports.UpdateArcHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const update_arc_command_1 = require("../impl/update-arc.command");
const arc_model_1 = require("../../models/arc.model");
const saga_model_1 = require("../../../sagas/models/saga.model");
let UpdateArcHandler = class UpdateArcHandler {
    constructor(arcModel, sagaModel) {
        this.arcModel = arcModel;
        this.sagaModel = sagaModel;
    }
    async execute(command) {
        const { id, name, description, saga_id, order } = command;
        const arc = await this.arcModel.findByPk(id);
        if (!arc) {
            throw new common_1.NotFoundException('Arc não encontrado');
        }
        let targetSagaId = arc.saga_id;
        if (saga_id !== undefined && saga_id !== arc.saga_id) {
            const saga = await this.sagaModel.findByPk(saga_id);
            if (!saga) {
                throw new common_1.NotFoundException('Saga não encontrada');
            }
            targetSagaId = saga_id;
        }
        if (order !== undefined) {
            const existingOrder = await this.arcModel.findOne({
                where: {
                    saga_id: targetSagaId,
                    order,
                },
            });
            if (existingOrder && existingOrder.id !== id) {
                throw new common_1.BadRequestException('Já existe um arco com essa ordem nessa saga');
            }
        }
        if (name !== undefined) {
            const existingName = await this.arcModel.findOne({
                where: {
                    saga_id: targetSagaId,
                    name,
                },
            });
            if (existingName && existingName.id !== id) {
                throw new common_1.BadRequestException('Já existe um arco com esse nome nessa saga');
            }
        }
        await arc.update({
            name: name ?? arc.name,
            description: description ?? arc.description,
            saga_id: targetSagaId,
            order: order ?? arc.order,
        });
        return arc;
    }
};
exports.UpdateArcHandler = UpdateArcHandler;
exports.UpdateArcHandler = UpdateArcHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_arc_command_1.UpdateArcCommand),
    __param(0, (0, sequelize_1.InjectModel)(arc_model_1.Arc)),
    __param(1, (0, sequelize_1.InjectModel)(saga_model_1.Saga)),
    __metadata("design:paramtypes", [Object, Object])
], UpdateArcHandler);
//# sourceMappingURL=update-arc.handler.js.map