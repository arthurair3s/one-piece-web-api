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
exports.ArcsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const permissions_guard_1 = require("../common/guards/permissions.guard");
const require_permissions_decorator_1 = require("../common/decorators/require-permissions.decorator");
const arcs_service_1 = require("./arcs.service");
const create_arcs_dto_1 = require("./dtos/create-arcs-dto");
const update_arcs_dto_1 = require("./dtos/update-arcs-dto");
const filter_arcs_dto_1 = require("./dtos/filter-arcs-dto");
const api_default_responses_decorator_1 = require("../common/decorators/api-default-responses.decorator");
const error_response_dto_1 = require("../common/dtos/error-response.dto");
let ArcsController = class ArcsController {
    constructor(arcsService) {
        this.arcsService = arcsService;
    }
    create(dto) {
        return this.arcsService.create(dto);
    }
    createBulk(dtos) {
        return this.arcsService.createBulk(dtos);
    }
    findAll(query) {
        return this.arcsService.findAll(query);
    }
    findOne(id) {
        return this.arcsService.findOne(id);
    }
    update(id, dto) {
        return this.arcsService.update(id, dto);
    }
    remove(id) {
        return this.arcsService.remove(id);
    }
};
exports.ArcsController = ArcsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo arco' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Arco criado com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Saga não encontrada.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Saga não encontrada.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Arco já existe nesta saga.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 409,
                message: 'Arco já existe nesta saga.',
                error: 'Conflict',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('arcs.create'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_arcs_dto_1.CreateArcDto]),
    __metadata("design:returntype", void 0)
], ArcsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Criar múltiplos arcos em lote' }),
    (0, swagger_1.ApiBody)({ type: [create_arcs_dto_1.CreateArcDto] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Arcos criados com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Sagas não encontradas.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Sagas não encontradas.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Conflito de nome ou ordem em um dos registros.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 409,
                message: 'Conflito de nome ou ordem em um dos registros.',
                error: 'Conflict',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('arcs.create'),
    (0, common_1.Post)('bulk'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], ArcsController.prototype, "createBulk", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Listar arcos com filtros e paginação' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de arcos retornada com sucesso.' }),
    (0, require_permissions_decorator_1.RequirePermissions)('arcs.view'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_arcs_dto_1.FilterArcDto]),
    __metadata("design:returntype", void 0)
], ArcsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Buscar um arco específico pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Arco encontrado.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Arco não encontrado.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Arco não encontrado.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('arcs.view'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArcsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar os dados de um arco existente' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Arco atualizado com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Arco não encontrado.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Arco não encontrado.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('arcs.update'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_arcs_dto_1.UpdateArcDto]),
    __metadata("design:returntype", void 0)
], ArcsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Remover um arco do sistema' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Arco removido com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Arco não encontrado.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Arco não encontrado.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('arcs.delete'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArcsController.prototype, "remove", null);
exports.ArcsController = ArcsController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiTags)('Arcs'),
    (0, common_1.Controller)('arcs'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, permissions_guard_1.PermissionsGuard),
    (0, api_default_responses_decorator_1.ApiDefaultResponses)(),
    (0, swagger_1.ApiExtraModels)(error_response_dto_1.ErrorResponseDto),
    __metadata("design:paramtypes", [arcs_service_1.ArcsService])
], ArcsController);
//# sourceMappingURL=arcs.controller.js.map