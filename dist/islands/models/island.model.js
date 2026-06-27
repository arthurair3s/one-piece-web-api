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
exports.Island = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const arc_model_1 = require("../../arcs/models/arc.model");
const arc_island_model_1 = require("../../arcs/models/arc-island.model");
let Island = class Island extends sequelize_typescript_1.Model {
};
exports.Island = Island;
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, autoIncrement: true, type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Island.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", String)
], Island.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false, type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], Island.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", Number)
], Island.prototype, "coordinate_x", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", Number)
], Island.prototype, "coordinate_y", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", Number)
], Island.prototype, "coordinate_z", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", String)
], Island.prototype, "model_url", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Island.prototype, "thumbnail_url", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: true }),
    __metadata("design:type", Boolean)
], Island.prototype, "is_active", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT, allowNull: false, defaultValue: -180.0 }),
    __metadata("design:type", Number)
], Island.prototype, "rotation_y", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT, allowNull: false, defaultValue: 1.0 }),
    __metadata("design:type", Number)
], Island.prototype, "scale", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => arc_model_1.Arc, () => arc_island_model_1.ArcIsland),
    __metadata("design:type", Array)
], Island.prototype, "arcs", void 0);
exports.Island = Island = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'islands',
        timestamps: true,
        paranoid: true,
        indexes: [
            { unique: true, fields: ['name'], where: { deletedAt: null }, name: 'islands_name_unique' }
        ]
    })
], Island);
//# sourceMappingURL=island.model.js.map