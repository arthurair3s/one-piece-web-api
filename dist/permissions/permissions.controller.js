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
exports.PermissionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const permissions_guard_1 = require("../common/guards/permissions.guard");
const require_permissions_decorator_1 = require("../common/decorators/require-permissions.decorator");
const permissions_service_1 = require("./permissions.service");
const create_permission_dto_1 = require("./dtos/create-permission.dto");
const update_permission_dto_1 = require("./dtos/update-permission.dto");
const filter_permission_dto_1 = require("./dtos/filter-permission.dto");
const api_default_responses_decorator_1 = require("../common/decorators/api-default-responses.decorator");
const error_response_dto_1 = require("../common/dtos/error-response.dto");
let PermissionsController = class PermissionsController {
    constructor(permissionsService) {
        this.permissionsService = permissionsService;
    }
    create(data) {
        return this.permissionsService.create(data);
    }
    findAll(filters) {
        return this.permissionsService.findAll(filters);
    }
    findOne(id) {
        return this.permissionsService.findOne(id);
    }
    update(id, data) {
        return this.permissionsService.update(id, data);
    }
    remove(id) {
        return this.permissionsService.remove(id);
    }
};
exports.PermissionsController = PermissionsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Criar uma nova permissão no sistema' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Permissão criada com sucesso.' }),
    (0, require_permissions_decorator_1.RequirePermissions)('permissions.create'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_permission_dto_1.CreatePermissionDto]),
    __metadata("design:returntype", void 0)
], PermissionsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as permissões com filtros e paginação' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de permissões retornada com sucesso.' }),
    (0, require_permissions_decorator_1.RequirePermissions)('permissions.view'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_permission_dto_1.PermissionFilterDto]),
    __metadata("design:returntype", void 0)
], PermissionsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Buscar dados de uma permissão específica pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Permissão encontrada.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Permissão não encontrada.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Permissão não encontrada.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('permissions.view'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PermissionsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar os dados de uma permissão existente' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Permissão atualizada com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Permissão não encontrada.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Permissão não encontrada.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('permissions.update'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_permission_dto_1.UpdatePermissionDto]),
    __metadata("design:returntype", void 0)
], PermissionsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Remover permanentemente uma permissão do sistema' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Permissão removida com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Permissão não encontrada.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Permissão não encontrada.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('permissions.delete'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PermissionsController.prototype, "remove", null);
exports.PermissionsController = PermissionsController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiTags)('Permissions'),
    (0, common_1.Controller)('permissions'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, permissions_guard_1.PermissionsGuard),
    (0, api_default_responses_decorator_1.ApiDefaultResponses)(),
    (0, swagger_1.ApiExtraModels)(error_response_dto_1.ErrorResponseDto),
    __metadata("design:paramtypes", [permissions_service_1.PermissionsService])
], PermissionsController);
//# sourceMappingURL=permissions.controller.js.map