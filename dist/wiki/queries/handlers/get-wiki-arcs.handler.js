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
exports.GetWikiArcsHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const get_wiki_arcs_query_1 = require("../impl/get-wiki-arcs.query");
const arc_read_model_1 = require("../../../arcs/models/arc-read.model");
const saga_read_model_1 = require("../../../sagas/models/saga-read.model");
let GetWikiArcsHandler = class GetWikiArcsHandler {
    constructor(arcReadModel) {
        this.arcReadModel = arcReadModel;
    }
    async execute(query) {
        const where = {};
        if (query.sagaId) {
            where.saga_id = query.sagaId;
        }
        const arcs = await this.arcReadModel.findAll({
            where,
            attributes: [
                'id', 'name', 'order', 'saga_id',
                [
                    sequelize_typescript_1.Sequelize.literal('(SELECT COUNT(*) FROM arc_islands WHERE arc_islands.arc_id = "ArcRead".id AND arc_islands."deletedAt" IS NULL)'),
                    'islandsCount',
                ],
            ],
            include: [
                {
                    model: saga_read_model_1.SagaRead,
                    attributes: ['name'],
                },
            ],
            order: [['order', 'ASC']],
        });
        return {
            arcs: arcs.map((a) => ({
                id: a.id,
                name: a.name,
                order: a.order,
                sagaId: a.saga_id,
                sagaName: a.saga?.name,
                islandsCount: parseInt(a.getDataValue('islandsCount'), 10) || 0,
            })),
        };
    }
};
exports.GetWikiArcsHandler = GetWikiArcsHandler;
exports.GetWikiArcsHandler = GetWikiArcsHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_wiki_arcs_query_1.GetWikiArcsQuery),
    __param(0, (0, sequelize_1.InjectModel)(arc_read_model_1.ArcRead, 'read-db')),
    __metadata("design:paramtypes", [Object])
], GetWikiArcsHandler);
//# sourceMappingURL=get-wiki-arcs.handler.js.map