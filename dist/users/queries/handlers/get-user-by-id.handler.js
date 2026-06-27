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
exports.GetUserByIdHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const get_user_by_id_query_1 = require("../impl/get-user-by-id.query");
const user_model_1 = require("../../models/user.model");
const profile_model_1 = require("../../../profiles/models/profile.model");
const permission_model_1 = require("../../../permissions/models/permission.model");
let GetUserByIdHandler = class GetUserByIdHandler {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async execute(query) {
        const user = await this.userModel.findByPk(query.id, {
            include: [
                {
                    model: profile_model_1.Profile,
                    include: [permission_model_1.Permission],
                },
            ],
        });
        if (!user) {
            throw new common_1.NotFoundException('Usuário não encontrado');
        }
        return user;
    }
};
exports.GetUserByIdHandler = GetUserByIdHandler;
exports.GetUserByIdHandler = GetUserByIdHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_user_by_id_query_1.GetUserByIdQuery),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object])
], GetUserByIdHandler);
//# sourceMappingURL=get-user-by-id.handler.js.map