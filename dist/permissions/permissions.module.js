"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const permission_model_1 = require("./models/permission.model");
const profile_permission_model_1 = require("./models/profile-permission.model");
const permissions_service_1 = require("./permissions.service");
const permissions_controller_1 = require("./permissions.controller");
const create_permission_handler_1 = require("./commands/handlers/create-permission.handler");
const update_permission_handler_1 = require("./commands/handlers/update-permission.handler");
const delete_permission_handler_1 = require("./commands/handlers/delete-permission.handler");
const get_permissions_handler_1 = require("./queries/handlers/get-permissions.handler");
const get_permission_by_id_handler_1 = require("./queries/handlers/get-permission-by-id.handler");
let PermissionsModule = class PermissionsModule {
};
exports.PermissionsModule = PermissionsModule;
exports.PermissionsModule = PermissionsModule = __decorate([
    (0, common_1.Module)({
        imports: [cqrs_1.CqrsModule, sequelize_1.SequelizeModule.forFeature([permission_model_1.Permission, profile_permission_model_1.ProfilePermission])],
        controllers: [permissions_controller_1.PermissionsController],
        providers: [
            permissions_service_1.PermissionsService,
            create_permission_handler_1.CreatePermissionHandler,
            update_permission_handler_1.UpdatePermissionHandler,
            delete_permission_handler_1.DeletePermissionHandler,
            get_permissions_handler_1.GetPermissionsHandler,
            get_permission_by_id_handler_1.GetPermissionByIdHandler,
        ],
        exports: [sequelize_1.SequelizeModule],
    })
], PermissionsModule);
//# sourceMappingURL=permissions.module.js.map