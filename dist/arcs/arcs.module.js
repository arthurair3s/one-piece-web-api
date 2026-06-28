"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArcsModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const arc_model_1 = require("./models/arc.model");
const saga_model_1 = require("../sagas/models/saga.model");
const island_model_1 = require("../islands/models/island.model");
const arc_island_model_1 = require("./models/arc-island.model");
const arc_character_version_model_1 = require("./models/arc-character-version.model");
const arcs_service_1 = require("./arcs.service");
const arcs_controller_1 = require("./arcs.controller");
const create_arc_handler_1 = require("./commands/handlers/create-arc.handler");
const create_arcs_bulk_handler_1 = require("./commands/handlers/create-arcs-bulk.handler");
const update_arc_handler_1 = require("./commands/handlers/update-arc.handler");
const delete_arc_handler_1 = require("./commands/handlers/delete-arc.handler");
const get_arcs_handler_1 = require("./queries/handlers/get-arcs.handler");
const get_arc_by_id_handler_1 = require("./queries/handlers/get-arc-by-id.handler");
const CommandHandlers = [
    create_arc_handler_1.CreateArcHandler,
    create_arcs_bulk_handler_1.CreateArcsBulkHandler,
    update_arc_handler_1.UpdateArcHandler,
    delete_arc_handler_1.DeleteArcHandler,
];
const QueryHandlers = [
    get_arcs_handler_1.GetArcsHandler,
    get_arc_by_id_handler_1.GetArcByIdHandler,
];
let ArcsModule = class ArcsModule {
};
exports.ArcsModule = ArcsModule;
exports.ArcsModule = ArcsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            sequelize_1.SequelizeModule.forFeature([arc_model_1.Arc, saga_model_1.Saga, island_model_1.Island, arc_island_model_1.ArcIsland, arc_character_version_model_1.ArcCharacterVersion]),
        ],
        controllers: [arcs_controller_1.ArcsController],
        providers: [
            arcs_service_1.ArcsService,
            ...CommandHandlers,
            ...QueryHandlers,
        ],
        exports: [arcs_service_1.ArcsService],
    })
], ArcsModule);
//# sourceMappingURL=arcs.module.js.map