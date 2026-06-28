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
exports.GetArcsHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_2 = require("sequelize");
const get_arcs_query_1 = require("../impl/get-arcs.query");
const arc_model_1 = require("../../models/arc.model");
let GetArcsHandler = class GetArcsHandler {
    constructor(arcModel) {
        this.arcModel = arcModel;
    }
    async execute(query) {
        const { page, limit, saga_id, name } = query;
        const offset = (page - 1) * limit;
        const where = {};
        if (saga_id !== undefined) {
            where.saga_id = saga_id;
        }
        if (name) {
            where.name = { [sequelize_2.Op.iLike]: `%${name}%` };
        }
        const { rows, count } = await this.arcModel.findAndCountAll({
            where,
            limit,
            offset,
            order: [
                ['saga_id', 'ASC'],
                ['order', 'ASC'],
            ],
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
exports.GetArcsHandler = GetArcsHandler;
exports.GetArcsHandler = GetArcsHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_arcs_query_1.GetArcsQuery),
    __param(0, (0, sequelize_1.InjectModel)(arc_model_1.Arc)),
    __metadata("design:paramtypes", [Object])
], GetArcsHandler);
//# sourceMappingURL=get-arcs.handler.js.map