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
exports.Saga = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const arc_model_1 = require("../../arcs/models/arc.model");
let Saga = class Saga extends sequelize_typescript_1.Model {
};
exports.Saga = Saga;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Saga.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Saga.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Saga.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Saga.prototype, "order", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => arc_model_1.Arc),
    __metadata("design:type", Array)
], Saga.prototype, "arcs", void 0);
exports.Saga = Saga = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'sagas',
        timestamps: true,
        paranoid: true,
        indexes: [
            { unique: true, fields: ['name'], where: { deletedAt: null }, name: 'sagas_name_unique' },
            { unique: true, fields: ['order'], where: { deletedAt: null }, name: 'sagas_order_unique' }
        ]
    })
], Saga);
//# sourceMappingURL=saga.model.js.map