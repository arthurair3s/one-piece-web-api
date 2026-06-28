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
exports.ArcCharacterVersionRead = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const arc_read_model_1 = require("./arc-read.model");
const character_read_model_1 = require("../../characters/models/character-read.model");
const character_version_read_model_1 = require("../../character-versions/models/character-version-read.model");
let ArcCharacterVersionRead = class ArcCharacterVersionRead extends sequelize_typescript_1.Model {
};
exports.ArcCharacterVersionRead = ArcCharacterVersionRead;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], ArcCharacterVersionRead.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => arc_read_model_1.ArcRead),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], ArcCharacterVersionRead.prototype, "arc_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => arc_read_model_1.ArcRead, { foreignKey: 'arc_id', constraints: false }),
    __metadata("design:type", arc_read_model_1.ArcRead)
], ArcCharacterVersionRead.prototype, "arc", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => character_version_read_model_1.CharacterVersionRead),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], ArcCharacterVersionRead.prototype, "character_version_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => character_version_read_model_1.CharacterVersionRead, { foreignKey: 'character_version_id', constraints: false }),
    __metadata("design:type", character_version_read_model_1.CharacterVersionRead)
], ArcCharacterVersionRead.prototype, "characterVersion", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => character_read_model_1.CharacterRead),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], ArcCharacterVersionRead.prototype, "character_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => character_read_model_1.CharacterRead, { foreignKey: 'character_id', constraints: false }),
    __metadata("design:type", character_read_model_1.CharacterRead)
], ArcCharacterVersionRead.prototype, "character", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], ArcCharacterVersionRead.prototype, "order", void 0);
exports.ArcCharacterVersionRead = ArcCharacterVersionRead = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'arc_character_versions',
        timestamps: true,
        paranoid: true,
        indexes: [
            { unique: true, fields: ['arc_id', 'character_id'], where: { deletedAt: null }, name: 'unique_one_version_per_character_in_arc_read' }
        ]
    })
], ArcCharacterVersionRead);
//# sourceMappingURL=arc-character-version-read.model.js.map