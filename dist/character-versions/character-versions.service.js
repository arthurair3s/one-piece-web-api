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
exports.CharacterVersionsService = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const create_character_version_command_1 = require("./commands/impl/create-character-version.command");
const create_character_versions_bulk_command_1 = require("./commands/impl/create-character-versions-bulk.command");
const update_character_version_command_1 = require("./commands/impl/update-character-version.command");
const delete_character_version_command_1 = require("./commands/impl/delete-character-version.command");
const get_character_versions_query_1 = require("./queries/impl/get-character-versions.query");
const get_character_version_query_1 = require("./queries/impl/get-character-version.query");
let CharacterVersionsService = class CharacterVersionsService {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    create(data) {
        return this.commandBus.execute(new create_character_version_command_1.CreateCharacterVersionCommand(data));
    }
    createBulk(data) {
        return this.commandBus.execute(new create_character_versions_bulk_command_1.CreateCharacterVersionsBulkCommand(data));
    }
    findAll(filters) {
        return this.queryBus.execute(new get_character_versions_query_1.GetCharacterVersionsQuery(filters));
    }
    findOne(id) {
        return this.queryBus.execute(new get_character_version_query_1.GetCharacterVersionQuery(id));
    }
    update(id, data) {
        return this.commandBus.execute(new update_character_version_command_1.UpdateCharacterVersionCommand(id, data));
    }
    remove(id) {
        return this.commandBus.execute(new delete_character_version_command_1.DeleteCharacterVersionCommand(id));
    }
};
exports.CharacterVersionsService = CharacterVersionsService;
exports.CharacterVersionsService = CharacterVersionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], CharacterVersionsService);
//# sourceMappingURL=character-versions.service.js.map