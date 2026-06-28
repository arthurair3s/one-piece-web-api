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
exports.GetCharactersHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_2 = require("sequelize");
const get_characters_query_1 = require("../impl/get-characters.query");
const character_model_1 = require("../../models/character.model");
const character_version_model_1 = require("../../../character-versions/models/character-version.model");
const arc_model_1 = require("../../../arcs/models/arc.model");
let GetCharactersHandler = class GetCharactersHandler {
    constructor(characterModel) {
        this.characterModel = characterModel;
    }
    async execute(query) {
        const { page = 1, limit = 10, name, slug } = query.filters;
        const offset = (page - 1) * limit;
        const where = {};
        if (name)
            where.name = { [sequelize_2.Op.iLike]: `%${name}%` };
        if (slug)
            where.slug = { [sequelize_2.Op.iLike]: `%${slug}%` };
        const { rows, count } = await this.characterModel.findAndCountAll({
            where,
            limit: Number(limit),
            offset: Number(offset),
            distinct: true,
            subQuery: false,
            include: [
                {
                    model: character_version_model_1.CharacterVersion,
                    include: [{
                            model: arc_model_1.Arc,
                            attributes: ['id', 'name', 'description', 'saga_id', 'order'],
                            through: { attributes: [] }
                        }],
                },
            ],
        });
        rows.forEach((char) => {
            let latestArcOrder = -1;
            let latestStatus = 'UNKNOWN';
            char.versions?.forEach((version) => {
                version.arcs?.forEach((arc) => {
                    if (arc.order > latestArcOrder) {
                        latestArcOrder = arc.order;
                        latestStatus = version.status;
                    }
                });
            });
            char.setDataValue('current_status', latestStatus);
        });
        return { rows, count };
    }
};
exports.GetCharactersHandler = GetCharactersHandler;
exports.GetCharactersHandler = GetCharactersHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_characters_query_1.GetCharactersQuery),
    __param(0, (0, sequelize_1.InjectModel)(character_model_1.Character)),
    __metadata("design:paramtypes", [Object])
], GetCharactersHandler);
//# sourceMappingURL=get-characters.handler.js.map