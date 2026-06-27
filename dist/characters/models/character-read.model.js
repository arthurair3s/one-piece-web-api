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
exports.CharacterRead = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const character_version_read_model_1 = require("../../character-versions/models/character-version-read.model");
let CharacterRead = class CharacterRead extends sequelize_typescript_1.Model {
};
exports.CharacterRead = CharacterRead;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], CharacterRead.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], CharacterRead.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], CharacterRead.prototype, "slug", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => character_version_read_model_1.CharacterVersionRead, { constraints: false }),
    __metadata("design:type", Array)
], CharacterRead.prototype, "versions", void 0);
exports.CharacterRead = CharacterRead = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'character_reads',
        timestamps: true,
        paranoid: true,
        indexes: [
            { unique: true, fields: ['slug'], where: { deletedAt: null }, name: 'characters_slug_unique_read' }
        ]
    })
], CharacterRead);
//# sourceMappingURL=character-read.model.js.map