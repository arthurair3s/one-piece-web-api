"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("./models/user.model");
const profile_model_1 = require("../profiles/models/profile.model");
const permission_model_1 = require("../permissions/models/permission.model");
const profile_permission_model_1 = require("../permissions/models/profile-permission.model");
const users_service_1 = require("./users.service");
const users_controller_1 = require("./users.controller");
const create_user_handler_1 = require("./commands/handlers/create-user.handler");
const get_users_handler_1 = require("./queries/handlers/get-users.handler");
const update_user_handler_1 = require("./commands/handlers/update-user.handler");
const delete_user_handler_1 = require("./commands/handlers/delete-user.handler");
const get_user_by_id_handler_1 = require("./queries/handlers/get-user-by-id.handler");
const get_user_by_email_handler_1 = require("./queries/handlers/get-user-by-email.handler");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [cqrs_1.CqrsModule, sequelize_1.SequelizeModule.forFeature([user_model_1.User, profile_model_1.Profile, permission_model_1.Permission, profile_permission_model_1.ProfilePermission])],
        controllers: [users_controller_1.UsersController],
        providers: [
            users_service_1.UsersService,
            create_user_handler_1.CreateUserHandler,
            get_users_handler_1.GetUsersHandler,
            update_user_handler_1.UpdateUserHandler,
            delete_user_handler_1.DeleteUserHandler,
            get_user_by_id_handler_1.GetUserByIdHandler,
            get_user_by_email_handler_1.GetUserByEmailHandler,
        ],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map