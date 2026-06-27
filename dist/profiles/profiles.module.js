"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const profile_model_1 = require("./models/profile.model");
const profiles_service_1 = require("./profiles.service");
const profiles_controller_1 = require("./profiles.controller");
const create_profile_handler_1 = require("./commands/handlers/create-profile.handler");
const get_profiles_handler_1 = require("./queries/handlers/get-profiles.handler");
const update_profile_handler_1 = require("./commands/handlers/update-profile.handler");
const delete_profile_handler_1 = require("./commands/handlers/delete-profile.handler");
const get_profile_by_id_handler_1 = require("./queries/handlers/get-profile-by-id.handler");
const update_profile_permissions_handler_1 = require("./commands/handlers/update-profile-permissions.handler");
const get_profile_permissions_handler_1 = require("./queries/handlers/get-profile-permissions.handler");
const profile_permission_model_1 = require("../permissions/models/profile-permission.model");
let ProfilesModule = class ProfilesModule {
};
exports.ProfilesModule = ProfilesModule;
exports.ProfilesModule = ProfilesModule = __decorate([
    (0, common_1.Module)({
        imports: [cqrs_1.CqrsModule, sequelize_1.SequelizeModule.forFeature([profile_model_1.Profile, profile_permission_model_1.ProfilePermission])],
        controllers: [profiles_controller_1.ProfilesController],
        providers: [
            profiles_service_1.ProfilesService,
            create_profile_handler_1.CreateProfileHandler,
            get_profiles_handler_1.GetProfilesHandler,
            update_profile_handler_1.UpdateProfileHandler,
            delete_profile_handler_1.DeleteProfileHandler,
            get_profile_by_id_handler_1.GetProfileByIdHandler,
            update_profile_permissions_handler_1.UpdateProfilePermissionsHandler,
            get_profile_permissions_handler_1.GetProfilePermissionsHandler,
        ],
        exports: [sequelize_1.SequelizeModule],
    })
], ProfilesModule);
//# sourceMappingURL=profiles.module.js.map