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
exports.ArcCharacterVersion = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const arc_model_1 = require("./arc.model");
const character_model_1 = require("../../characters/models/character.model");
const character_version_model_1 = require("../../character-versions/models/character-version.model");
let ArcCharacterVersion = class ArcCharacterVersion extends sequelize_typescript_1.Model {
};
exports.ArcCharacterVersion = ArcCharacterVersion;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => arc_model_1.Arc),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], ArcCharacterVersion.prototype, "arc_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => character_version_model_1.CharacterVersion),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], ArcCharacterVersion.prototype, "character_version_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => character_version_model_1.CharacterVersion),
    __metadata("design:type", character_version_model_1.CharacterVersion)
], ArcCharacterVersion.prototype, "characterVersion", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => character_model_1.Character),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], ArcCharacterVersion.prototype, "character_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => character_model_1.Character),
    __metadata("design:type", character_model_1.Character)
], ArcCharacterVersion.prototype, "character", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], ArcCharacterVersion.prototype, "order", void 0);
exports.ArcCharacterVersion = ArcCharacterVersion = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'arc_character_versions',
        timestamps: true,
        paranoid: true,
        indexes: [
            { unique: true, fields: ['arc_id', 'character_id'], where: { deletedAt: null }, name: 'unique_one_version_per_character_in_arc' }
        ]
    })
], ArcCharacterVersion);
//# sourceMappingURL=arc-character-version.model.js.map