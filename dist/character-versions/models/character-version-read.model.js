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
exports.CharacterVersionRead = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const character_read_model_1 = require("../../characters/models/character-read.model");
let CharacterVersionRead = class CharacterVersionRead extends sequelize_typescript_1.Model {
};
exports.CharacterVersionRead = CharacterVersionRead;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], CharacterVersionRead.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => character_read_model_1.CharacterRead),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], CharacterVersionRead.prototype, "character_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => character_read_model_1.CharacterRead, { foreignKey: 'character_id', constraints: false }),
    __metadata("design:type", character_read_model_1.CharacterRead)
], CharacterVersionRead.prototype, "character", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], CharacterVersionRead.prototype, "alias", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], CharacterVersionRead.prototype, "epithet", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BIGINT, allowNull: true }),
    __metadata("design:type", Number)
], CharacterVersionRead.prototype, "bounty", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        defaultValue: 'ALIVE',
    }),
    __metadata("design:type", String)
], CharacterVersionRead.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], CharacterVersionRead.prototype, "image_url", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, allowNull: true }),
    __metadata("design:type", String)
], CharacterVersionRead.prototype, "description", void 0);
exports.CharacterVersionRead = CharacterVersionRead = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'character_versions', timestamps: true, paranoid: true })
], CharacterVersionRead);
//# sourceMappingURL=character-version-read.model.js.map