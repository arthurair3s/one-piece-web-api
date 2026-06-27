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
exports.ProfilesService = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const create_profile_command_1 = require("./commands/impl/create-profile.command");
const get_profiles_query_1 = require("./queries/impl/get-profiles.query");
const update_profile_command_1 = require("./commands/impl/update-profile.command");
const delete_profile_command_1 = require("./commands/impl/delete-profile.command");
const get_profile_by_id_query_1 = require("./queries/impl/get-profile-by-id.query");
const get_profile_permissions_query_1 = require("./queries/impl/get-profile-permissions.query");
const update_profile_permissions_command_1 = require("./commands/impl/update-profile-permissions.command");
let ProfilesService = class ProfilesService {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    create(data) {
        return this.commandBus.execute(new create_profile_command_1.CreateProfileCommand(data));
    }
    updatePermissions(id, data) {
        return this.commandBus.execute(new update_profile_permissions_command_1.UpdateProfilePermissionsCommand(id, data));
    }
    findAll(filters) {
        return this.queryBus.execute(new get_profiles_query_1.GetProfilesQuery(filters));
    }
    findOne(id) {
        return this.queryBus.execute(new get_profile_by_id_query_1.GetProfileByIdQuery(id));
    }
    getPermissions(id) {
        return this.queryBus.execute(new get_profile_permissions_query_1.GetProfilePermissionsQuery(id));
    }
    update(id, data) {
        return this.commandBus.execute(new update_profile_command_1.UpdateProfileCommand(id, data));
    }
    remove(id) {
        return this.commandBus.execute(new delete_profile_command_1.DeleteProfileCommand(id));
    }
};
exports.ProfilesService = ProfilesService;
exports.ProfilesService = ProfilesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], ProfilesService);
//# sourceMappingURL=profiles.service.js.map