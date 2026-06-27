"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IslandsModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const cqrs_1 = require("@nestjs/cqrs");
const islands_controller_1 = require("./islands.controller");
const islands_service_1 = require("./islands.service");
const island_model_1 = require("./models/island.model");
const island_read_model_1 = require("./models/island-read.model");
const arc_model_1 = require("../arcs/models/arc.model");
const arc_read_model_1 = require("../arcs/models/arc-read.model");
const arc_island_model_1 = require("../arcs/models/arc-island.model");
const arc_island_read_model_1 = require("../arcs/models/arc-island-read.model");
const character_version_model_1 = require("../character-versions/models/character-version.model");
const character_version_read_model_1 = require("../character-versions/models/character-version-read.model");
const character_model_1 = require("../characters/models/character.model");
const character_read_model_1 = require("../characters/models/character-read.model");
const arc_character_version_read_model_1 = require("../arcs/models/arc-character-version-read.model");
const event_read_model_1 = require("../events/models/event-read.model");
const create_island_handler_1 = require("./commands/handlers/create-island.handler");
const create_islands_bulk_handler_1 = require("./commands/handlers/create-islands-bulk.handler");
const update_island_handler_1 = require("./commands/handlers/update-island.handler");
const delete_island_handler_1 = require("./commands/handlers/delete-island.handler");
const get_island_details_handler_1 = require("./queries/handlers/get-island-details.handler");
const get_islands_handler_1 = require("./queries/handlers/get-islands.handler");
const get_island_arcs_handler_1 = require("./queries/handlers/get-island-arcs.handler");
const get_islands_map_handler_1 = require("./queries/handlers/get-islands-map.handler");
const CommandHandlers = [
    create_island_handler_1.CreateIslandHandler,
    create_islands_bulk_handler_1.CreateIslandsBulkHandler,
    update_island_handler_1.UpdateIslandHandler,
    delete_island_handler_1.DeleteIslandHandler,
];
const QueryHandlers = [
    get_island_details_handler_1.GetIslandDetailsHandler,
    get_islands_handler_1.GetIslandsHandler,
    get_island_arcs_handler_1.GetIslandArcsHandler,
    get_islands_map_handler_1.GetIslandsMapHandler,
];
let IslandsModule = class IslandsModule {
};
exports.IslandsModule = IslandsModule;
exports.IslandsModule = IslandsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            sequelize_1.SequelizeModule.forFeature([
                island_model_1.Island,
                arc_model_1.Arc,
                arc_island_model_1.ArcIsland,
                character_version_model_1.CharacterVersion,
                character_model_1.Character,
            ]),
            sequelize_1.SequelizeModule.forFeature([
                island_read_model_1.IslandRead,
                arc_read_model_1.ArcRead,
                arc_island_read_model_1.ArcIslandRead,
                character_version_read_model_1.CharacterVersionRead,
                character_read_model_1.CharacterRead,
                event_read_model_1.EventRead,
                arc_character_version_read_model_1.ArcCharacterVersionRead,
            ], 'read-db'),
        ],
        controllers: [islands_controller_1.IslandsController],
        providers: [
            islands_service_1.IslandsService,
            ...CommandHandlers,
            ...QueryHandlers,
        ],
    })
], IslandsModule);
//# sourceMappingURL=islands.module.js.map