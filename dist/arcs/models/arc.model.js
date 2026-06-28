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
exports.Arc = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const saga_model_1 = require("../../sagas/models/saga.model");
const island_model_1 = require("../../islands/models/island.model");
const arc_island_model_1 = require("./arc-island.model");
const character_version_model_1 = require("../../character-versions/models/character-version.model");
const arc_character_version_model_1 = require("./arc-character-version.model");
let Arc = class Arc extends sequelize_typescript_1.Model {
};
exports.Arc = Arc;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Arc.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Arc.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Arc.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => saga_model_1.Saga),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Arc.prototype, "saga_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => saga_model_1.Saga),
    __metadata("design:type", saga_model_1.Saga)
], Arc.prototype, "saga", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Arc.prototype, "order", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => island_model_1.Island, () => arc_island_model_1.ArcIsland),
    __metadata("design:type", Array)
], Arc.prototype, "islands", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => character_version_model_1.CharacterVersion, () => arc_character_version_model_1.ArcCharacterVersion),
    __metadata("design:type", Array)
], Arc.prototype, "character_versions", void 0);
exports.Arc = Arc = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'arcs',
        timestamps: true,
        paranoid: true,
        indexes: [
            { unique: true, fields: ['order', 'saga_id'], where: { deletedAt: null }, name: 'unique_arc_order_per_saga' }
        ]
    })
], Arc);
//# sourceMappingURL=arc.model.js.map