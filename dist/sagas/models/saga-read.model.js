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
exports.SagaRead = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const arc_read_model_1 = require("../../arcs/models/arc-read.model");
let SagaRead = class SagaRead extends sequelize_typescript_1.Model {
};
exports.SagaRead = SagaRead;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], SagaRead.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: false,
    }),
    __metadata("design:type", String)
], SagaRead.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    __metadata("design:type", String)
], SagaRead.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], SagaRead.prototype, "order", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => arc_read_model_1.ArcRead, { constraints: false, foreignKey: 'saga_id' }),
    __metadata("design:type", Array)
], SagaRead.prototype, "arcs", void 0);
exports.SagaRead = SagaRead = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'sagas',
        timestamps: true,
        paranoid: true,
        indexes: [
            { unique: true, fields: ['name'], where: { deletedAt: null }, name: 'sagas_name_unique_read' },
            { unique: true, fields: ['order'], where: { deletedAt: null }, name: 'sagas_order_unique_read' }
        ]
    })
], SagaRead);
//# sourceMappingURL=saga-read.model.js.map