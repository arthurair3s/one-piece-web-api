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
exports.EventParticipant = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const event_model_1 = require("./event.model");
const character_version_model_1 = require("../../character-versions/models/character-version.model");
let EventParticipant = class EventParticipant extends sequelize_typescript_1.Model {
};
exports.EventParticipant = EventParticipant;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => event_model_1.Event),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], EventParticipant.prototype, "event_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => character_version_model_1.CharacterVersion),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], EventParticipant.prototype, "character_version_id", void 0);
exports.EventParticipant = EventParticipant = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'event_participants',
        timestamps: true,
        paranoid: true,
        indexes: [
            { unique: true, fields: ['event_id', 'character_version_id'], where: { deletedAt: null }, name: 'unique_event_participant' }
        ]
    })
], EventParticipant);
//# sourceMappingURL=event-participant.model.js.map