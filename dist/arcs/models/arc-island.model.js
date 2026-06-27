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
exports.ArcIsland = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const arc_model_1 = require("./arc.model");
const island_model_1 = require("../../islands/models/island.model");
const event_model_1 = require("../../events/models/event.model");
let ArcIsland = class ArcIsland extends sequelize_typescript_1.Model {
};
exports.ArcIsland = ArcIsland;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], ArcIsland.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => arc_model_1.Arc),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], ArcIsland.prototype, "arc_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => island_model_1.Island),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], ArcIsland.prototype, "island_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false, defaultValue: 0 }),
    __metadata("design:type", Number)
], ArcIsland.prototype, "order", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => event_model_1.Event),
    __metadata("design:type", Array)
], ArcIsland.prototype, "events", void 0);
exports.ArcIsland = ArcIsland = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'arc_islands',
        timestamps: true,
        paranoid: true,
        indexes: [
            { unique: true, fields: ['arc_id', 'island_id'], where: { deletedAt: null }, name: 'unique_arc_island_pair' }
        ],
    })
], ArcIsland);
//# sourceMappingURL=arc-island.model.js.map