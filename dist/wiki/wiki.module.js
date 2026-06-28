"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WikiModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const wiki_controller_1 = require("./wiki.controller");
const island_read_model_1 = require("../islands/models/island-read.model");
const arc_read_model_1 = require("../arcs/models/arc-read.model");
const arc_island_read_model_1 = require("../arcs/models/arc-island-read.model");
const saga_read_model_1 = require("../sagas/models/saga-read.model");
const arc_character_version_read_model_1 = require("../arcs/models/arc-character-version-read.model");
const character_version_read_model_1 = require("../character-versions/models/character-version-read.model");
const character_read_model_1 = require("../characters/models/character-read.model");
const event_read_model_1 = require("../events/models/event-read.model");
const get_wiki_sagas_handler_1 = require("./queries/handlers/get-wiki-sagas.handler");
const get_wiki_arcs_handler_1 = require("./queries/handlers/get-wiki-arcs.handler");
const get_wiki_map_handler_1 = require("./queries/handlers/get-wiki-map.handler");
const get_wiki_map_filtered_handler_1 = require("./queries/handlers/get-wiki-map-filtered.handler");
const get_wiki_island_handler_1 = require("./queries/handlers/get-wiki-island.handler");
const get_wiki_island_arc_handler_1 = require("./queries/handlers/get-wiki-island-arc.handler");
const QueryHandlers = [
    get_wiki_sagas_handler_1.GetWikiSagasHandler,
    get_wiki_arcs_handler_1.GetWikiArcsHandler,
    get_wiki_map_handler_1.GetWikiMapHandler,
    get_wiki_map_filtered_handler_1.GetWikiMapFilteredHandler,
    get_wiki_island_handler_1.GetWikiIslandHandler,
    get_wiki_island_arc_handler_1.GetWikiIslandArcHandler,
];
let WikiModule = class WikiModule {
};
exports.WikiModule = WikiModule;
exports.WikiModule = WikiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            sequelize_1.SequelizeModule.forFeature([
                island_read_model_1.IslandRead,
                arc_read_model_1.ArcRead,
                arc_island_read_model_1.ArcIslandRead,
                saga_read_model_1.SagaRead,
                arc_character_version_read_model_1.ArcCharacterVersionRead,
                character_version_read_model_1.CharacterVersionRead,
                character_read_model_1.CharacterRead,
                event_read_model_1.EventRead,
            ], 'read-db'),
        ],
        controllers: [wiki_controller_1.WikiController],
        providers: [...QueryHandlers],
    })
], WikiModule);
//# sourceMappingURL=wiki.module.js.map