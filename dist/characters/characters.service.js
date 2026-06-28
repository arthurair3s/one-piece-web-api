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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersService = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const create_character_command_1 = require("./commands/impl/create-character.command");
const create_characters_bulk_command_1 = require("./commands/impl/create-characters-bulk.command");
const get_characters_query_1 = require("./queries/impl/get-characters.query");
const get_character_query_1 = require("./queries/impl/get-character.query");
const update_character_command_1 = require("./commands/impl/update-character.command");
const delete_character_command_1 = require("./commands/impl/delete-character.command");
let CharactersService = class CharactersService {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    create(data) {
        return this.commandBus.execute(new create_character_command_1.CreateCharacterCommand(data));
    }
    createBulk(data) {
        return this.commandBus.execute(new create_characters_bulk_command_1.CreateCharactersBulkCommand(data));
    }
    findAll(filters) {
        return this.queryBus.execute(new get_characters_query_1.GetCharactersQuery(filters));
    }
    findOne(id) {
        return this.queryBus.execute(new get_character_query_1.GetCharacterQuery(id));
    }
    update(id, data) {
        return this.commandBus.execute(new update_character_command_1.UpdateCharacterCommand(id, data));
    }
    remove(id) {
        return this.commandBus.execute(new delete_character_command_1.DeleteCharacterCommand(id));
    }
};
exports.CharactersService = CharactersService;
exports.CharactersService = CharactersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], CharactersService);
//# sourceMappingURL=characters.service.js.map