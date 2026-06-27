"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterVersionsModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const character_version_model_1 = require("./models/character-version.model");
const character_model_1 = require("../characters/models/character.model");
const arc_model_1 = require("../arcs/models/arc.model");
const arc_character_version_model_1 = require("../arcs/models/arc-character-version.model");
const character_versions_service_1 = require("./character-versions.service");
const character_versions_controller_1 = require("./character-versions.controller");
const create_character_version_handler_1 = require("./commands/handlers/create-character-version.handler");
const create_character_versions_bulk_handler_1 = require("./commands/handlers/create-character-versions-bulk.handler");
const update_character_version_handler_1 = require("./commands/handlers/update-character-version.handler");
const delete_character_version_handler_1 = require("./commands/handlers/delete-character-version.handler");
const get_character_versions_handler_1 = require("./queries/handlers/get-character-versions.handler");
const get_character_version_handler_1 = require("./queries/handlers/get-character-version.handler");
let CharacterVersionsModule = class CharacterVersionsModule {
};
exports.CharacterVersionsModule = CharacterVersionsModule;
exports.CharacterVersionsModule = CharacterVersionsModule = __decorate([
    (0, common_1.Module)({
        imports: [cqrs_1.CqrsModule, sequelize_1.SequelizeModule.forFeature([character_version_model_1.CharacterVersion, character_model_1.Character, arc_model_1.Arc, arc_character_version_model_1.ArcCharacterVersion])],
        controllers: [character_versions_controller_1.CharacterVersionsController],
        providers: [
            character_versions_service_1.CharacterVersionsService,
            create_character_version_handler_1.CreateCharacterVersionHandler,
            create_character_versions_bulk_handler_1.CreateCharacterVersionsBulkHandler,
            update_character_version_handler_1.UpdateCharacterVersionHandler,
            delete_character_version_handler_1.DeleteCharacterVersionHandler,
            get_character_versions_handler_1.GetCharacterVersionsHandler,
            get_character_version_handler_1.GetCharacterVersionHandler,
        ],
    })
], CharacterVersionsModule);
//# sourceMappingURL=character-versions.module.js.map