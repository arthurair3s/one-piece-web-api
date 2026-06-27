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
exports.CreateArcHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const sequelize_2 = require("sequelize");
const create_arc_command_1 = require("../impl/create-arc.command");
const arc_model_1 = require("../../models/arc.model");
const saga_model_1 = require("../../../sagas/models/saga.model");
let CreateArcHandler = class CreateArcHandler {
    constructor(arcModel, sagaModel) {
        this.arcModel = arcModel;
        this.sagaModel = sagaModel;
    }
    async execute(command) {
        const { name, description, saga_id, order } = command;
        const saga = await this.sagaModel.findByPk(saga_id);
        if (!saga) {
            throw new common_1.NotFoundException(`Saga com ID ${saga_id} não encontrada.`);
        }
        try {
            return await this.arcModel.create({
                name,
                description,
                saga_id,
                order,
            });
        }
        catch (error) {
            if (error instanceof sequelize_2.UniqueConstraintError) {
                throw new common_1.ConflictException(`Já existe um arco com o nome "${name}" ou ordem "${order}" nesta saga.`);
            }
            throw error;
        }
    }
};
exports.CreateArcHandler = CreateArcHandler;
exports.CreateArcHandler = CreateArcHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_arc_command_1.CreateArcCommand),
    __param(0, (0, sequelize_1.InjectModel)(arc_model_1.Arc)),
    __param(1, (0, sequelize_1.InjectModel)(saga_model_1.Saga)),
    __metadata("design:paramtypes", [Object, Object])
], CreateArcHandler);
//# sourceMappingURL=create-arc.handler.js.map