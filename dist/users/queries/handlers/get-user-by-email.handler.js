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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByEmailHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const get_user_by_email_query_1 = require("../impl/get-user-by-email.query");
const user_model_1 = require("../../models/user.model");
let GetUserByEmailHandler = class GetUserByEmailHandler {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async execute(query) {
        return this.userModel.unscoped().findOne({
            where: { email: query.email },
            include: ['profile'],
        });
    }
};
exports.GetUserByEmailHandler = GetUserByEmailHandler;
exports.GetUserByEmailHandler = GetUserByEmailHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_user_by_email_query_1.GetUserByEmailQuery),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object])
], GetUserByEmailHandler);
//# sourceMappingURL=get-user-by-email.handler.js.map