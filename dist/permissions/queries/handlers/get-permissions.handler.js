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
exports.GetPermissionsHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const get_permissions_query_1 = require("../impl/get-permissions.query");
const sequelize_1 = require("@nestjs/sequelize");
const permission_model_1 = require("../../models/permission.model");
const sequelize_2 = require("sequelize");
let GetPermissionsHandler = class GetPermissionsHandler {
    constructor(permissionModel) {
        this.permissionModel = permissionModel;
    }
    async execute(query) {
        const { page = 1, limit = 10, name, slug } = query.filters;
        const offset = (page - 1) * limit;
        const where = {};
        if (name)
            where.name = { [sequelize_2.Op.iLike]: `%${name}%` };
        if (slug)
            where.slug = { [sequelize_2.Op.iLike]: `%${slug}%` };
        return this.permissionModel.findAndCountAll({
            where,
            limit: Number(limit),
            offset: Number(offset),
        });
    }
};
exports.GetPermissionsHandler = GetPermissionsHandler;
exports.GetPermissionsHandler = GetPermissionsHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_permissions_query_1.GetPermissionsQuery),
    __param(0, (0, sequelize_1.InjectModel)(permission_model_1.Permission)),
    __metadata("design:paramtypes", [Object])
], GetPermissionsHandler);
//# sourceMappingURL=get-permissions.handler.js.map