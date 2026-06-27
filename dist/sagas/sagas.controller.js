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
exports.SagasController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const permissions_guard_1 = require("../common/guards/permissions.guard");
const require_permissions_decorator_1 = require("../common/decorators/require-permissions.decorator");
const sagas_service_1 = require("./sagas.service");
const create_saga_dto_1 = require("./dtos/create-saga-dto");
const update_saga_dto_1 = require("./dtos/update-saga-dto");
const filter_saga_dto_1 = require("./dtos/filter-saga-dto");
const api_default_responses_decorator_1 = require("../common/decorators/api-default-responses.decorator");
const error_response_dto_1 = require("../common/dtos/error-response.dto");
let SagasController = class SagasController {
    constructor(sagasService) {
        this.sagasService = sagasService;
    }
    create(dto) {
        return this.sagasService.create(dto);
    }
    createBulk(dtos) {
        return this.sagasService.createBulk(dtos);
    }
    findAll(query) {
        return this.sagasService.findAll(query);
    }
    findOne(id) {
        return this.sagasService.findOne(id);
    }
    update(id, dto) {
        return this.sagasService.update(id, dto);
    }
    remove(id) {
        return this.sagasService.remove(id);
    }
};
exports.SagasController = SagasController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Criar uma nova saga' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Saga criada com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Já existe uma saga com este nome ou ordem.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 409,
                message: 'Já existe uma saga com este nome ou ordem.',
                error: 'Conflict',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('sagas.create'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_saga_dto_1.CreateSagaDto]),
    __metadata("design:returntype", void 0)
], SagasController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Criar múltiplas sagas em lote' }),
    (0, swagger_1.ApiBody)({ type: [create_saga_dto_1.CreateSagaDto] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Sagas criadas com sucesso.' }),
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
    (0, require_permissions_decorator_1.RequirePermissions)('sagas.create'),
    (0, common_1.Post)('bulk'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], SagasController.prototype, "createBulk", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Listar sagas com paginação' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de sagas retornada com sucesso.' }),
    (0, require_permissions_decorator_1.RequirePermissions)('sagas.view'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_saga_dto_1.FilterSagaDto]),
    __metadata("design:returntype", void 0)
], SagasController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Buscar uma saga específica pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Saga encontrada.' }),
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
    (0, require_permissions_decorator_1.RequirePermissions)('sagas.view'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SagasController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar os dados de uma saga existente' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Saga atualizada com sucesso.' }),
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
    (0, require_permissions_decorator_1.RequirePermissions)('sagas.update'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_saga_dto_1.UpdateSagaDto]),
    __metadata("design:returntype", void 0)
], SagasController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Remover uma saga do sistema' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Saga removida com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Não é possível deletar uma saga com arcos vinculados.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 400,
                message: 'Não é possível deletar uma saga com arcos vinculados.',
                error: 'Bad Request',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
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
    (0, require_permissions_decorator_1.RequirePermissions)('sagas.delete'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SagasController.prototype, "remove", null);
exports.SagasController = SagasController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiTags)('Sagas'),
    (0, common_1.Controller)('sagas'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, permissions_guard_1.PermissionsGuard),
    (0, api_default_responses_decorator_1.ApiDefaultResponses)(),
    (0, swagger_1.ApiExtraModels)(error_response_dto_1.ErrorResponseDto),
    __metadata("design:paramtypes", [sagas_service_1.SagasService])
], SagasController);
//# sourceMappingURL=sagas.controller.js.map