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
exports.GetSagaByIdHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const get_saga_by_id_query_1 = require("../impl/get-saga-by-id.query");
const saga_read_model_1 = require("../../models/saga-read.model");
const arc_read_model_1 = require("../../../arcs/models/arc-read.model");
let GetSagaByIdHandler = class GetSagaByIdHandler {
    constructor(sagaModel) {
        this.sagaModel = sagaModel;
    }
    async execute(query) {
        const { id } = query;
        const saga = await this.sagaModel.findByPk(id, {
            include: [
                {
                    model: arc_read_model_1.ArcRead,
                    attributes: ['id', 'name', 'order', 'description'],
                },
            ],
            order: [[{ model: arc_read_model_1.ArcRead, as: 'arcs' }, 'order', 'ASC']],
        });
        if (!saga) {
            throw new common_1.NotFoundException('Saga não encontrada');
        }
        return saga;
    }
};
exports.GetSagaByIdHandler = GetSagaByIdHandler;
exports.GetSagaByIdHandler = GetSagaByIdHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_saga_by_id_query_1.GetSagaByIdQuery),
    __param(0, (0, sequelize_1.InjectModel)(saga_read_model_1.SagaRead, 'read-db')),
    __metadata("design:paramtypes", [Object])
], GetSagaByIdHandler);
//# sourceMappingURL=get-saga-by-id.handler.js.map