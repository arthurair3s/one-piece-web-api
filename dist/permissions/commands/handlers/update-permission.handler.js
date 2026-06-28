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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePermissionHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const update_permission_command_1 = require("../impl/update-permission.command");
const sequelize_1 = require("@nestjs/sequelize");
const permission_model_1 = require("../../models/permission.model");
const common_1 = require("@nestjs/common");
let UpdatePermissionHandler = class UpdatePermissionHandler {
    constructor(permissionModel) {
        this.permissionModel = permissionModel;
    }
    async execute(command) {
        const { id, data } = command;
        const permission = await this.permissionModel.findByPk(id);
        if (!permission) {
            throw new common_1.NotFoundException('Permissão não encontrada');
        }
        await permission.update(data);
        return permission;
    }
};
exports.UpdatePermissionHandler = UpdatePermissionHandler;
exports.UpdatePermissionHandler = UpdatePermissionHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_permission_command_1.UpdatePermissionCommand),
    __param(0, (0, sequelize_1.InjectModel)(permission_model_1.Permission)),
    __metadata("design:paramtypes", [Object])
], UpdatePermissionHandler);
//# sourceMappingURL=update-permission.handler.js.map