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
exports.GetWikiIslandArcHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const get_wiki_island_arc_query_1 = require("../impl/get-wiki-island-arc.query");
const arc_island_read_model_1 = require("../../../arcs/models/arc-island-read.model");
const arc_character_version_read_model_1 = require("../../../arcs/models/arc-character-version-read.model");
const island_read_model_1 = require("../../../islands/models/island-read.model");
const arc_read_model_1 = require("../../../arcs/models/arc-read.model");
const saga_read_model_1 = require("../../../sagas/models/saga-read.model");
const event_read_model_1 = require("../../../events/models/event-read.model");
const character_version_read_model_1 = require("../../../character-versions/models/character-version-read.model");
const character_read_model_1 = require("../../../characters/models/character-read.model");
let GetWikiIslandArcHandler = class GetWikiIslandArcHandler {
    constructor(arcIslandReadModel, arcCharacterVersionReadModel) {
        this.arcIslandReadModel = arcIslandReadModel;
        this.arcCharacterVersionReadModel = arcCharacterVersionReadModel;
    }
    async execute(query) {
        const { islandId, arcId } = query;
        const arcIsland = await this.arcIslandReadModel.findOne({
            where: { island_id: islandId, arc_id: arcId },
            include: [
                {
                    model: island_read_model_1.IslandRead,
                    attributes: ['id', 'name'],
                },
                {
                    model: arc_read_model_1.ArcRead,
                    attributes: ['id', 'name'],
                    include: [
                        {
                            model: saga_read_model_1.SagaRead,
                            attributes: ['name'],
                        },
                    ],
                },
                {
                    model: event_read_model_1.EventRead,
                    attributes: ['id', 'title', 'description', 'type', 'order'],
                },
            ],
        });
        if (!arcIsland) {
            throw new common_1.BadRequestException(`O arco ${arcId} não está vinculado à ilha ${islandId}.`);
        }
        const arcCharacters = await this.arcCharacterVersionReadModel.findAll({
            where: { arc_id: arcId },
            include: [
                {
                    model: character_version_read_model_1.CharacterVersionRead,
                    attributes: ['id', 'alias', 'epithet', 'image_url', 'bounty', 'status'],
                    include: [
                        {
                            model: character_read_model_1.CharacterRead,
                            attributes: ['id', 'name'],
                        },
                    ],
                },
            ],
        });
        const events = (arcIsland.events || [])
            .sort((a, b) => a.order - b.order)
            .map((e) => ({
            id: e.id,
            title: e.title,
            description: e.description,
            type: e.type,
            order: e.order,
        }));
        const characters = arcCharacters.map((acv) => ({
            id: acv.characterVersion?.id,
            name: acv.characterVersion?.alias || acv.characterVersion?.character?.name,
            epithet: acv.characterVersion?.epithet,
            imageUrl: acv.characterVersion?.image_url,
            bounty: acv.characterVersion?.bounty,
            status: acv.characterVersion?.status,
        }));
        return {
            island: {
                id: arcIsland.island?.id,
                name: arcIsland.island?.name,
            },
            arc: {
                id: arcIsland.arc?.id,
                name: arcIsland.arc?.name,
                sagaName: arcIsland.arc?.saga?.name,
            },
            characters,
            events,
        };
    }
};
exports.GetWikiIslandArcHandler = GetWikiIslandArcHandler;
exports.GetWikiIslandArcHandler = GetWikiIslandArcHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_wiki_island_arc_query_1.GetWikiIslandArcQuery),
    __param(0, (0, sequelize_1.InjectModel)(arc_island_read_model_1.ArcIslandRead, 'read-db')),
    __param(1, (0, sequelize_1.InjectModel)(arc_character_version_read_model_1.ArcCharacterVersionRead, 'read-db')),
    __metadata("design:paramtypes", [Object, Object])
], GetWikiIslandArcHandler);
//# sourceMappingURL=get-wiki-island-arc.handler.js.map