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
exports.CreateSagasBulkHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_2 = require("sequelize");
const create_sagas_bulk_command_1 = require("../impl/create-sagas-bulk.command");
const saga_model_1 = require("../../models/saga.model");
let CreateSagasBulkHandler = class CreateSagasBulkHandler {
    constructor(sagaModel, sequelize) {
        this.sagaModel = sagaModel;
        this.sequelize = sequelize;
    }
    async execute(command) {
        const { sagas } = command;
        return this.sequelize.transaction(async (t) => {
            try {
                return await this.sagaModel.bulkCreate(sagas, {
                    transaction: t,
                    validate: true
                });
            }
            catch (error) {
                if (error instanceof sequelize_2.UniqueConstraintError) {
                    throw new common_1.ConflictException('Erro ao criar sagas em lote: Conflito de nome ou ordem em um dos registros.');
                }
                throw error;
            }
        });
    }
};
exports.CreateSagasBulkHandler = CreateSagasBulkHandler;
exports.CreateSagasBulkHandler = CreateSagasBulkHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_sagas_bulk_command_1.CreateSagasBulkCommand),
    __param(0, (0, sequelize_1.InjectModel)(saga_model_1.Saga)),
    __metadata("design:paramtypes", [Object, sequelize_typescript_1.Sequelize])
], CreateSagasBulkHandler);
//# sourceMappingURL=create-sagas-bulk.handler.js.map