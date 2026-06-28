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
exports.Permission = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const profile_model_1 = require("../../profiles/models/profile.model");
const profile_permission_model_1 = require("./profile-permission.model");
let Permission = class Permission extends sequelize_typescript_1.Model {
};
exports.Permission = Permission;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Permission.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Permission.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Permission.prototype, "slug", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Permission.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => profile_model_1.Profile, () => profile_permission_model_1.ProfilePermission),
    __metadata("design:type", Array)
], Permission.prototype, "profiles", void 0);
exports.Permission = Permission = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'permissions',
        timestamps: true,
        paranoid: true,
        indexes: [
            { unique: true, fields: ['name'], where: { deletedAt: null }, name: 'permissions_name_unique' },
            { unique: true, fields: ['slug'], where: { deletedAt: null }, name: 'permissions_slug_unique' }
        ]
    })
], Permission);
//# sourceMappingURL=permission.model.js.map