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
exports.GetWikiSagasHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const get_wiki_sagas_query_1 = require("../impl/get-wiki-sagas.query");
const saga_read_model_1 = require("../../../sagas/models/saga-read.model");
let GetWikiSagasHandler = class GetWikiSagasHandler {
    constructor(sagaReadModel) {
        this.sagaReadModel = sagaReadModel;
    }
    async execute(_query) {
        const sagas = await this.sagaReadModel.findAll({
            attributes: ['id', 'name', 'order'],
            order: [['order', 'ASC']],
        });
        return {
            sagas: sagas.map((s) => ({
                id: s.id,
                name: s.name,
                order: s.order,
            })),
        };
    }
};
exports.GetWikiSagasHandler = GetWikiSagasHandler;
exports.GetWikiSagasHandler = GetWikiSagasHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_wiki_sagas_query_1.GetWikiSagasQuery),
    __param(0, (0, sequelize_1.InjectModel)(saga_read_model_1.SagaRead, 'read-db')),
    __metadata("design:paramtypes", [Object])
], GetWikiSagasHandler);
//# sourceMappingURL=get-wiki-sagas.handler.js.map