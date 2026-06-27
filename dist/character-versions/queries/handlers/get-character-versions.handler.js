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
exports.GetCharacterVersionsHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_2 = require("sequelize");
const get_character_versions_query_1 = require("../impl/get-character-versions.query");
const character_version_model_1 = require("../../models/character-version.model");
const character_model_1 = require("../../../characters/models/character.model");
const arc_model_1 = require("../../../arcs/models/arc.model");
let GetCharacterVersionsHandler = class GetCharacterVersionsHandler {
    constructor(characterVersionModel) {
        this.characterVersionModel = characterVersionModel;
    }
    async execute(query) {
        const { page = 1, limit = 10, character_id, arc_id, status, alias, epithet } = query.filters;
        const offset = (page - 1) * limit;
        const where = {};
        if (character_id)
            where.character_id = character_id;
        if (status)
            where.status = { [sequelize_2.Op.iLike]: `%${status}%` };
        if (alias)
            where.alias = { [sequelize_2.Op.iLike]: `%${alias}%` };
        if (epithet)
            where.epithet = { [sequelize_2.Op.iLike]: `%${epithet}%` };
        const include = [character_model_1.Character];
        if (arc_id) {
            include.push({
                model: arc_model_1.Arc,
                where: { id: arc_id },
                through: { attributes: [] }
            });
        }
        return this.characterVersionModel.findAndCountAll({
            where,
            limit: Number(limit),
            offset: Number(offset),
            include,
        });
    }
};
exports.GetCharacterVersionsHandler = GetCharacterVersionsHandler;
exports.GetCharacterVersionsHandler = GetCharacterVersionsHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_character_versions_query_1.GetCharacterVersionsQuery),
    __param(0, (0, sequelize_1.InjectModel)(character_version_model_1.CharacterVersion)),
    __metadata("design:paramtypes", [Object])
], GetCharacterVersionsHandler);
//# sourceMappingURL=get-character-versions.handler.js.map