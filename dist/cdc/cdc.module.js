"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdcModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const cdc_controller_1 = require("./cdc.controller");
const cdc_service_1 = require("./cdc.service");
const cdc_bypass_service_1 = require("./cdc-bypass.service");
const event_read_model_1 = require("../events/models/event-read.model");
const event_participant_read_model_1 = require("../events/models/event-participant-read.model");
const character_version_read_model_1 = require("../character-versions/models/character-version-read.model");
const character_read_model_1 = require("../characters/models/character-read.model");
const island_read_model_1 = require("../islands/models/island-read.model");
const arc_read_model_1 = require("../arcs/models/arc-read.model");
const arc_island_read_model_1 = require("../arcs/models/arc-island-read.model");
const arc_character_version_read_model_1 = require("../arcs/models/arc-character-version-read.model");
const saga_read_model_1 = require("../sagas/models/saga-read.model");
let CdcModule = class CdcModule {
};
exports.CdcModule = CdcModule;
exports.CdcModule = CdcModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                event_read_model_1.EventRead,
                event_participant_read_model_1.EventParticipantRead,
                character_version_read_model_1.CharacterVersionRead,
                character_read_model_1.CharacterRead,
                island_read_model_1.IslandRead,
                arc_read_model_1.ArcRead,
                arc_island_read_model_1.ArcIslandRead,
                saga_read_model_1.SagaRead,
                arc_character_version_read_model_1.ArcCharacterVersionRead,
            ], 'read-db')
        ],
        controllers: [cdc_controller_1.CdcController],
        providers: [cdc_service_1.CdcService, cdc_bypass_service_1.CdcBypassService],
    })
], CdcModule);
//# sourceMappingURL=cdc.module.js.map