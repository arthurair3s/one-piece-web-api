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
exports.ProfilesController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const permissions_guard_1 = require("../common/guards/permissions.guard");
const require_permissions_decorator_1 = require("../common/decorators/require-permissions.decorator");
const swagger_1 = require("@nestjs/swagger");
const profiles_service_1 = require("./profiles.service");
const create_profile_dto_1 = require("./dtos/create-profile.dto");
const profile_filter_dto_1 = require("./dtos/profile-filter.dto");
const update_profile_dto_1 = require("./dtos/update-profile.dto");
const update_profile_permissions_dto_1 = require("./dtos/update-profile-permissions.dto");
const api_default_responses_decorator_1 = require("../common/decorators/api-default-responses.decorator");
const error_response_dto_1 = require("../common/dtos/error-response.dto");
let ProfilesController = class ProfilesController {
    constructor(profilesService) {
        this.profilesService = profilesService;
    }
    create(body) {
        return this.profilesService.create(body);
    }
    updatePermissions(id, body) {
        return this.profilesService.updatePermissions(id, body);
    }
    findAll(params) {
        return this.profilesService.findAll(params);
    }
    findOne(id) {
        return this.profilesService.findOne(id);
    }
    update(id, body) {
        return this.profilesService.update(id, body);
    }
    remove(id) {
        return this.profilesService.remove(id);
    }
};
exports.ProfilesController = ProfilesController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo perfil no sistema' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Perfil criado com sucesso.' }),
    (0, require_permissions_decorator_1.RequirePermissions)('profiles.create'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_profile_dto_1.CreateProfileDto]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Vincular permissões a um perfil (Substituir atual)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Permissões vinculadas com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'As permissões do perfil ADMIN (mestre) não podem ser alteradas.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 400,
                message: 'As permissões do perfil ADMIN (mestre) não podem ser alteradas.',
                error: 'Bad Request',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Perfil não encontrado.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Perfil não encontrado.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('profiles.assign'),
    (0, common_1.Post)(':id/permissions'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_profile_permissions_dto_1.UpdateProfilePermissionsDto]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "updatePermissions", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os perfis com filtros e paginação' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de perfis retornada com sucesso.' }),
    (0, require_permissions_decorator_1.RequirePermissions)('profiles.view'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [profile_filter_dto_1.ProfileFilterDto]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Buscar dados de um perfil específico pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Perfil encontrado.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Perfil não encontrado.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Perfil não encontrado.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('profiles.view'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar os dados de um perfil existente' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Perfil atualizado com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Perfil não encontrado.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Perfil não encontrado.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('profiles.update'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_profile_dto_1.UpdateProfileDto]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Remover permanentemente um perfil (Soft Delete)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Perfil removido com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Perfil não encontrado.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Perfil não encontrado.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('profiles.delete'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "remove", null);
exports.ProfilesController = ProfilesController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiTags)('Profiles'),
    (0, common_1.Controller)('profiles'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, permissions_guard_1.PermissionsGuard),
    (0, api_default_responses_decorator_1.ApiDefaultResponses)(),
    (0, swagger_1.ApiExtraModels)(error_response_dto_1.ErrorResponseDto),
    __metadata("design:paramtypes", [profiles_service_1.ProfilesService])
], ProfilesController);
//# sourceMappingURL=profiles.controller.js.map