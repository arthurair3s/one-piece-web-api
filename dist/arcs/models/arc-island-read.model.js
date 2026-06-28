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
exports.ArcIslandRead = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const arc_read_model_1 = require("./arc-read.model");
const island_read_model_1 = require("../../islands/models/island-read.model");
const event_read_model_1 = require("../../events/models/event-read.model");
let ArcIslandRead = class ArcIslandRead extends sequelize_typescript_1.Model {
};
exports.ArcIslandRead = ArcIslandRead;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], ArcIslandRead.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => arc_read_model_1.ArcRead),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], ArcIslandRead.prototype, "arc_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => arc_read_model_1.ArcRead, { constraints: false }),
    __metadata("design:type", arc_read_model_1.ArcRead)
], ArcIslandRead.prototype, "arc", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => island_read_model_1.IslandRead),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], ArcIslandRead.prototype, "island_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => island_read_model_1.IslandRead, { constraints: false }),
    __metadata("design:type", island_read_model_1.IslandRead)
], ArcIslandRead.prototype, "island", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false, defaultValue: 0 }),
    __metadata("design:type", Number)
], ArcIslandRead.prototype, "order", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => event_read_model_1.EventRead, { constraints: false }),
    __metadata("design:type", Array)
], ArcIslandRead.prototype, "events", void 0);
exports.ArcIslandRead = ArcIslandRead = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'arc_islands',
        timestamps: true,
        paranoid: true,
        indexes: [
            { unique: true, fields: ['arc_id', 'island_id'], where: { deletedAt: null }, name: 'unique_arc_island_pair_read' }
        ],
    })
], ArcIslandRead);
//# sourceMappingURL=arc-island-read.model.js.map