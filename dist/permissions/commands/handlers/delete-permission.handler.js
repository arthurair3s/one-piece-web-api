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
exports.DeletePermissionHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const delete_permission_command_1 = require("../impl/delete-permission.command");
const permission_model_1 = require("../../models/permission.model");
let DeletePermissionHandler = class DeletePermissionHandler {
    constructor(permissionModel) {
        this.permissionModel = permissionModel;
    }
    async execute(command) {
        const permission = await this.permissionModel.findByPk(command.id);
        if (!permission) {
            throw new common_1.NotFoundException('Permissão não encontrada');
        }
        await permission.destroy();
        return { success: true, message: 'Permissão removida com sucesso' };
    }
};
exports.DeletePermissionHandler = DeletePermissionHandler;
exports.DeletePermissionHandler = DeletePermissionHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_permission_command_1.DeletePermissionCommand),
    __param(0, (0, sequelize_1.InjectModel)(permission_model_1.Permission)),
    __metadata("design:paramtypes", [Object])
], DeletePermissionHandler);
//# sourceMappingURL=delete-permission.handler.js.map