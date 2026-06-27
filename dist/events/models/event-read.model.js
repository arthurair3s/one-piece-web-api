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
exports.EventRead = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const character_version_read_model_1 = require("../../character-versions/models/character-version-read.model");
const event_participant_read_model_1 = require("./event-participant-read.model");
const arc_island_read_model_1 = require("../../arcs/models/arc-island-read.model");
let EventRead = class EventRead extends sequelize_typescript_1.Model {
};
exports.EventRead = EventRead;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], EventRead.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => arc_island_read_model_1.ArcIslandRead),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], EventRead.prototype, "arc_island_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => arc_island_read_model_1.ArcIslandRead, { constraints: false }),
    __metadata("design:type", arc_island_read_model_1.ArcIslandRead)
], EventRead.prototype, "arcIsland", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], EventRead.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    __metadata("design:type", String)
], EventRead.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], EventRead.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: 0,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], EventRead.prototype, "order", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => character_version_read_model_1.CharacterVersionRead, {
        through: () => event_participant_read_model_1.EventParticipantRead,
        foreignKey: 'event_id',
        otherKey: 'character_version_id',
        constraints: false
    }),
    __metadata("design:type", Array)
], EventRead.prototype, "participants", void 0);
exports.EventRead = EventRead = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'events',
        timestamps: true,
        paranoid: true,
        indexes: [
            { unique: true, fields: ['arc_island_id', 'order'], where: { deletedAt: null }, name: 'unique_event_order_context_read' }
        ]
    })
], EventRead);
//# sourceMappingURL=event-read.model.js.map