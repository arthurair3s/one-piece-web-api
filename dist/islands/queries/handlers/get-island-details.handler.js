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
exports.GetIslandDetailsHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const get_island_details_query_1 = require("../impl/get-island-details.query");
const island_read_model_1 = require("../../models/island-read.model");
const arc_island_read_model_1 = require("../../../arcs/models/arc-island-read.model");
const arc_character_version_read_model_1 = require("../../../arcs/models/arc-character-version-read.model");
const character_version_read_model_1 = require("../../../character-versions/models/character-version-read.model");
const character_read_model_1 = require("../../../characters/models/character-read.model");
const event_read_model_1 = require("../../../events/models/event-read.model");
let GetIslandDetailsHandler = class GetIslandDetailsHandler {
    constructor(islandModel, arcIslandModel, arcCharacterVersionModel) {
        this.islandModel = islandModel;
        this.arcIslandModel = arcIslandModel;
        this.arcCharacterVersionModel = arcCharacterVersionModel;
    }
    async execute(query) {
        const { islandId, arcId } = query;
        if (!arcId) {
            throw new common_1.BadRequestException('arc_id é obrigatório');
        }
        const island = await this.islandModel.findByPk(islandId);
        if (!island || island.is_active === false) {
            throw new common_1.NotFoundException('Island não encontrada');
        }
        const arcIsland = await this.arcIslandModel.findOne({
            where: { island_id: islandId, arc_id: arcId },
            include: [
                {
                    model: event_read_model_1.EventRead,
                    attributes: ['id', 'title', 'description', 'order'],
                },
            ],
        });
        if (!arcIsland) {
            throw new common_1.BadRequestException('Este arco não pertence à ilha');
        }
        const arcCharacters = await this.arcCharacterVersionModel.findAll({
            where: { arc_id: arcId },
            include: [
                {
                    model: character_version_read_model_1.CharacterVersionRead,
                    include: [
                        {
                            model: character_read_model_1.CharacterRead,
                            attributes: ['id', 'name'],
                        },
                    ],
                },
            ],
        });
        const characters = arcCharacters.map((acv) => ({
            id: acv.characterVersion.id,
            characterId: acv.characterVersion.character_id,
            name: acv.characterVersion.alias || acv.characterVersion.character?.name,
            epithet: acv.characterVersion.epithet,
            image: acv.characterVersion.image_url,
            bounty: acv.characterVersion.bounty,
            status: acv.characterVersion.status,
        }));
        const events = (arcIsland.events || [])
            .sort((a, b) => a.order - b.order)
            .map((e) => ({
            id: e.id,
            title: e.title,
            description: e.description,
        }));
        return {
            id: island.id,
            name: island.name,
            description: island.description,
            coordinates: {
                x: island.coordinate_x,
                y: island.coordinate_y,
                z: island.coordinate_z,
            },
            arc: {
                id: arcId,
            },
            characters,
            events,
        };
    }
};
exports.GetIslandDetailsHandler = GetIslandDetailsHandler;
exports.GetIslandDetailsHandler = GetIslandDetailsHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_island_details_query_1.GetIslandDetailsQuery),
    __param(0, (0, sequelize_1.InjectModel)(island_read_model_1.IslandRead, 'read-db')),
    __param(1, (0, sequelize_1.InjectModel)(arc_island_read_model_1.ArcIslandRead, 'read-db')),
    __param(2, (0, sequelize_1.InjectModel)(arc_character_version_read_model_1.ArcCharacterVersionRead, 'read-db')),
    __metadata("design:paramtypes", [Object, Object, Object])
], GetIslandDetailsHandler);
//# sourceMappingURL=get-island-details.handler.js.map