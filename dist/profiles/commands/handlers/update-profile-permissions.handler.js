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
exports.UpdateProfilePermissionsHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const common_1 = require("@nestjs/common");
const update_profile_permissions_command_1 = require("../impl/update-profile-permissions.command");
const profile_model_1 = require("../../models/profile.model");
const profile_permission_model_1 = require("../../../permissions/models/profile-permission.model");
let UpdateProfilePermissionsHandler = class UpdateProfilePermissionsHandler {
    constructor(sequelize, profileModel, profilePermissionModel) {
        this.sequelize = sequelize;
        this.profileModel = profileModel;
        this.profilePermissionModel = profilePermissionModel;
    }
    async execute(command) {
        const { profileId, data } = command;
        const { permissionIds } = data;
        const profile = await this.profileModel.findByPk(profileId);
        if (!profile) {
            throw new common_1.NotFoundException('Perfil não encontrado');
        }
        if (profile.name === 'ADMIN' || profileId === 1) {
            const { BadRequestException } = require('@nestjs/common');
            throw new BadRequestException('As permissões do perfil ADMIN (mestre) não podem ser alteradas');
        }
        return await this.sequelize.transaction(async (transaction) => {
            await this.profilePermissionModel.destroy({
                where: { profile_id: profileId },
                transaction,
            });
            if (permissionIds && permissionIds.length > 0) {
                const records = permissionIds.map((permId) => ({
                    profile_id: profileId,
                    permission_id: permId,
                }));
                await this.profilePermissionModel.bulkCreate(records, { transaction });
            }
            return {
                success: true,
                message: 'Permissões do perfil atualizadas com sucesso',
                count: permissionIds.length,
            };
        });
    }
};
exports.UpdateProfilePermissionsHandler = UpdateProfilePermissionsHandler;
exports.UpdateProfilePermissionsHandler = UpdateProfilePermissionsHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_profile_permissions_command_1.UpdateProfilePermissionsCommand),
    __param(1, (0, sequelize_1.InjectModel)(profile_model_1.Profile)),
    __param(2, (0, sequelize_1.InjectModel)(profile_permission_model_1.ProfilePermission)),
    __metadata("design:paramtypes", [sequelize_typescript_1.Sequelize, Object, Object])
], UpdateProfilePermissionsHandler);
//# sourceMappingURL=update-profile-permissions.handler.js.map