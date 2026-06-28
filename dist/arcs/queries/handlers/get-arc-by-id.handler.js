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
exports.GetArcByIdHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const get_arc_by_id_query_1 = require("../impl/get-arc-by-id.query");
const arc_model_1 = require("../../models/arc.model");
const island_model_1 = require("../../../islands/models/island.model");
let GetArcByIdHandler = class GetArcByIdHandler {
    constructor(arcModel) {
        this.arcModel = arcModel;
    }
    async execute(query) {
        const { id } = query;
        const arc = await this.arcModel.findByPk(id, {
            include: [
                {
                    model: island_model_1.Island,
                    through: { attributes: ['order'] },
                    attributes: ['id', 'name', 'coordinate_x', 'coordinate_y', 'coordinate_z'],
                },
            ],
        });
        if (!arc) {
            throw new common_1.NotFoundException('Arc não encontrado');
        }
        return arc;
    }
};
exports.GetArcByIdHandler = GetArcByIdHandler;
exports.GetArcByIdHandler = GetArcByIdHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_arc_by_id_query_1.GetArcByIdQuery),
    __param(0, (0, sequelize_1.InjectModel)(arc_model_1.Arc)),
    __metadata("design:paramtypes", [Object])
], GetArcByIdHandler);
//# sourceMappingURL=get-arc-by-id.handler.js.map