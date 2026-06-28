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
exports.IslandRead = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const arc_read_model_1 = require("../../arcs/models/arc-read.model");
const arc_island_read_model_1 = require("../../arcs/models/arc-island-read.model");
let IslandRead = class IslandRead extends sequelize_typescript_1.Model {
};
exports.IslandRead = IslandRead;
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], IslandRead.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", String)
], IslandRead.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false, type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], IslandRead.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false, type: sequelize_typescript_1.DataType.FLOAT }),
    __metadata("design:type", Number)
], IslandRead.prototype, "coordinate_x", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false, type: sequelize_typescript_1.DataType.FLOAT }),
    __metadata("design:type", Number)
], IslandRead.prototype, "coordinate_y", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false, type: sequelize_typescript_1.DataType.FLOAT }),
    __metadata("design:type", Number)
], IslandRead.prototype, "coordinate_z", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", String)
], IslandRead.prototype, "model_url", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], IslandRead.prototype, "thumbnail_url", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: true }),
    __metadata("design:type", Boolean)
], IslandRead.prototype, "is_active", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT, allowNull: false, defaultValue: -180.0 }),
    __metadata("design:type", Number)
], IslandRead.prototype, "rotation_y", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT, allowNull: false, defaultValue: 1.0 }),
    __metadata("design:type", Number)
], IslandRead.prototype, "scale", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => arc_read_model_1.ArcRead, { through: () => arc_island_read_model_1.ArcIslandRead, constraints: false }),
    __metadata("design:type", Array)
], IslandRead.prototype, "arcs", void 0);
exports.IslandRead = IslandRead = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'islands',
        timestamps: true,
        paranoid: true,
        indexes: [
            { unique: true, fields: ['name'], where: { deletedAt: null }, name: 'islands_name_unique_read' }
        ]
    })
], IslandRead);
//# sourceMappingURL=island-read.model.js.map