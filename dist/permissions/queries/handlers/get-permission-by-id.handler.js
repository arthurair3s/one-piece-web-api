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
exports.GetPermissionByIdHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const get_permission_by_id_query_1 = require("../impl/get-permission-by-id.query");
const sequelize_1 = require("@nestjs/sequelize");
const permission_model_1 = require("../../models/permission.model");
const common_1 = require("@nestjs/common");
let GetPermissionByIdHandler = class GetPermissionByIdHandler {
    constructor(permissionModel) {
        this.permissionModel = permissionModel;
    }
    async execute(query) {
        const permission = await this.permissionModel.findByPk(query.id);
        if (!permission) {
            throw new common_1.NotFoundException('Permissão não encontrada');
        }
        return permission;
    }
};
exports.GetPermissionByIdHandler = GetPermissionByIdHandler;
exports.GetPermissionByIdHandler = GetPermissionByIdHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_permission_by_id_query_1.GetPermissionByIdQuery),
    __param(0, (0, sequelize_1.InjectModel)(permission_model_1.Permission)),
    __metadata("design:paramtypes", [Object])
], GetPermissionByIdHandler);
//# sourceMappingURL=get-permission-by-id.handler.js.map