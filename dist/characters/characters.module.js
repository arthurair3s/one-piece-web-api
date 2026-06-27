"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const character_model_1 = require("./models/character.model");
const characters_service_1 = require("./characters.service");
const characters_controller_1 = require("./characters.controller");
const create_character_handler_1 = require("./commands/handlers/create-character.handler");
const create_characters_bulk_handler_1 = require("./commands/handlers/create-characters-bulk.handler");
const update_character_handler_1 = require("./commands/handlers/update-character.handler");
const delete_character_handler_1 = require("./commands/handlers/delete-character.handler");
const get_characters_handler_1 = require("./queries/handlers/get-characters.handler");
const get_character_handler_1 = require("./queries/handlers/get-character.handler");
let CharactersModule = class CharactersModule {
};
exports.CharactersModule = CharactersModule;
exports.CharactersModule = CharactersModule = __decorate([
    (0, common_1.Module)({
        imports: [cqrs_1.CqrsModule, sequelize_1.SequelizeModule.forFeature([character_model_1.Character])],
        controllers: [characters_controller_1.CharactersController],
        providers: [
            characters_service_1.CharactersService,
            create_character_handler_1.CreateCharacterHandler,
            create_characters_bulk_handler_1.CreateCharactersBulkHandler,
            update_character_handler_1.UpdateCharacterHandler,
            delete_character_handler_1.DeleteCharacterHandler,
            get_characters_handler_1.GetCharactersHandler,
            get_character_handler_1.GetCharacterHandler,
        ],
    })
], CharactersModule);
//# sourceMappingURL=characters.module.js.map