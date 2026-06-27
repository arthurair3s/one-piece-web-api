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
exports.Event = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const arc_island_model_1 = require("../../arcs/models/arc-island.model");
const character_version_model_1 = require("../../character-versions/models/character-version.model");
const event_participant_model_1 = require("./event-participant.model");
let Event = class Event extends sequelize_typescript_1.Model {
};
exports.Event = Event;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Event.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => arc_island_model_1.ArcIsland),
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Event.prototype, "arc_island_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => arc_island_model_1.ArcIsland),
    __metadata("design:type", arc_island_model_1.ArcIsland)
], Event.prototype, "arcIsland", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Event.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], Event.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Event.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], Event.prototype, "order", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => character_version_model_1.CharacterVersion, () => event_participant_model_1.EventParticipant),
    __metadata("design:type", Array)
], Event.prototype, "participants", void 0);
exports.Event = Event = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'events',
        timestamps: true,
        paranoid: true,
        indexes: [
            { unique: true, fields: ['arc_island_id', 'order'], where: { deletedAt: null }, name: 'unique_event_order_context' }
        ]
    })
], Event);
//# sourceMappingURL=event.model.js.map