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
exports.CharacterVersion = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const character_model_1 = require("../../characters/models/character.model");
const arc_model_1 = require("../../arcs/models/arc.model");
const arc_character_version_model_1 = require("../../arcs/models/arc-character-version.model");
const event_model_1 = require("../../events/models/event.model");
const event_participant_model_1 = require("../../events/models/event-participant.model");
let CharacterVersion = class CharacterVersion extends sequelize_typescript_1.Model {
};
exports.CharacterVersion = CharacterVersion;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], CharacterVersion.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => character_model_1.Character),
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], CharacterVersion.prototype, "character_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => character_model_1.Character),
    __metadata("design:type", character_model_1.Character)
], CharacterVersion.prototype, "character", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => arc_model_1.Arc, () => arc_character_version_model_1.ArcCharacterVersion),
    __metadata("design:type", Array)
], CharacterVersion.prototype, "arcs", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => event_model_1.Event, () => event_participant_model_1.EventParticipant),
    __metadata("design:type", Array)
], CharacterVersion.prototype, "events", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], CharacterVersion.prototype, "alias", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], CharacterVersion.prototype, "epithet", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.BIGINT),
    __metadata("design:type", Number)
], CharacterVersion.prototype, "bounty", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM('ALIVE', 'DECEASED', 'UNKNOWN', 'IMPRISONED'),
        defaultValue: 'ALIVE',
    }),
    __metadata("design:type", String)
], CharacterVersion.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], CharacterVersion.prototype, "image_url", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], CharacterVersion.prototype, "description", void 0);
exports.CharacterVersion = CharacterVersion = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'character_versions', timestamps: true, paranoid: true })
], CharacterVersion);
//# sourceMappingURL=character-version.model.js.map