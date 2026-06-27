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
exports.GetProfileByIdHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const get_profile_by_id_query_1 = require("../impl/get-profile-by-id.query");
const profile_model_1 = require("../../models/profile.model");
let GetProfileByIdHandler = class GetProfileByIdHandler {
    constructor(profileModel) {
        this.profileModel = profileModel;
    }
    async execute(query) {
        const profile = await this.profileModel.findByPk(query.id);
        if (!profile) {
            throw new common_1.NotFoundException('Perfil não encontrado');
        }
        return profile;
    }
};
exports.GetProfileByIdHandler = GetProfileByIdHandler;
exports.GetProfileByIdHandler = GetProfileByIdHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_profile_by_id_query_1.GetProfileByIdQuery),
    __param(0, (0, sequelize_1.InjectModel)(profile_model_1.Profile)),
    __metadata("design:paramtypes", [Object])
], GetProfileByIdHandler);
//# sourceMappingURL=get-profile-by-id.handler.js.map