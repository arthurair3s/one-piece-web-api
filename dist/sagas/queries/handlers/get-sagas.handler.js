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
exports.GetSagasHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_2 = require("sequelize");
const get_sagas_query_1 = require("../impl/get-sagas.query");
const saga_read_model_1 = require("../../models/saga-read.model");
let GetSagasHandler = class GetSagasHandler {
    constructor(sagaModel) {
        this.sagaModel = sagaModel;
    }
    async execute(query) {
        const { page, limit, name, order } = query;
        const offset = (page - 1) * limit;
        const where = {};
        if (name) {
            where.name = { [sequelize_2.Op.iLike]: `%${name}%` };
        }
        if (order !== undefined) {
            where.order = order;
        }
        const { rows, count } = await this.sagaModel.findAndCountAll({
            where,
            limit,
            offset,
            order: [['order', 'ASC']],
        });
        return {
            data: rows,
            meta: {
                total: count,
                page,
                last_page: Math.ceil(count / limit),
            },
        };
    }
};
exports.GetSagasHandler = GetSagasHandler;
exports.GetSagasHandler = GetSagasHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_sagas_query_1.GetSagasQuery),
    __param(0, (0, sequelize_1.InjectModel)(saga_read_model_1.SagaRead, 'read-db')),
    __metadata("design:paramtypes", [Object])
], GetSagasHandler);
//# sourceMappingURL=get-sagas.handler.js.map