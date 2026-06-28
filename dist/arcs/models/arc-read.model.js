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
exports.ArcRead = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const island_read_model_1 = require("../../islands/models/island-read.model");
const arc_island_read_model_1 = require("./arc-island-read.model");
const saga_read_model_1 = require("../../sagas/models/saga-read.model");
const character_version_read_model_1 = require("../../character-versions/models/character-version-read.model");
const arc_character_version_read_model_1 = require("./arc-character-version-read.model");
let ArcRead = class ArcRead extends sequelize_typescript_1.Model {
};
exports.ArcRead = ArcRead;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], ArcRead.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], ArcRead.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
    }),
    __metadata("design:type", String)
], ArcRead.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], ArcRead.prototype, "saga_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => saga_read_model_1.SagaRead, { constraints: false, foreignKey: 'saga_id' }),
    __metadata("design:type", saga_read_model_1.SagaRead)
], ArcRead.prototype, "saga", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], ArcRead.prototype, "order", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => island_read_model_1.IslandRead, { through: () => arc_island_read_model_1.ArcIslandRead, constraints: false }),
    __metadata("design:type", Array)
], ArcRead.prototype, "islands", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => character_version_read_model_1.CharacterVersionRead, { through: () => arc_character_version_read_model_1.ArcCharacterVersionRead, constraints: false }),
    __metadata("design:type", Array)
], ArcRead.prototype, "character_versions", void 0);
exports.ArcRead = ArcRead = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'arcs',
        timestamps: true,
        paranoid: true,
        indexes: [
            { unique: true, fields: ['order', 'saga_id'], where: { deletedAt: null }, name: 'unique_arc_order_per_saga_read' }
        ]
    })
], ArcRead);
//# sourceMappingURL=arc-read.model.js.map