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
exports.CreateSagaHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const sequelize_2 = require("sequelize");
const create_saga_command_1 = require("../impl/create-saga.command");
const saga_model_1 = require("../../models/saga.model");
let CreateSagaHandler = class CreateSagaHandler {
    constructor(sagaModel) {
        this.sagaModel = sagaModel;
    }
    async execute(command) {
        const { name, order, description } = command;
        try {
            return await this.sagaModel.create({
                name,
                order,
                description,
            });
        }
        catch (error) {
            if (error instanceof sequelize_2.UniqueConstraintError) {
                throw new common_1.ConflictException(`Já existe uma saga com este nome ou ordem de sequência (${name} / ${order}).`);
            }
            throw error;
        }
    }
};
exports.CreateSagaHandler = CreateSagaHandler;
exports.CreateSagaHandler = CreateSagaHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_saga_command_1.CreateSagaCommand),
    __param(0, (0, sequelize_1.InjectModel)(saga_model_1.Saga)),
    __metadata("design:paramtypes", [Object])
], CreateSagaHandler);
//# sourceMappingURL=create-saga.handler.js.map