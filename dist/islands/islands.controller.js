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
exports.IslandsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const permissions_guard_1 = require("../common/guards/permissions.guard");
const require_permissions_decorator_1 = require("../common/decorators/require-permissions.decorator");
const islands_service_1 = require("./islands.service");
const create_island_dto_1 = require("./dtos/create-island.dto");
const update_island_dto_1 = require("./dtos/update-island.dto");
const filter_island_dto_1 = require("./dtos/filter-island.dto");
const api_default_responses_decorator_1 = require("../common/decorators/api-default-responses.decorator");
const error_response_dto_1 = require("../common/dtos/error-response.dto");
let IslandsController = class IslandsController {
    constructor(islandsService) {
        this.islandsService = islandsService;
    }
    findAll(query) {
        return this.islandsService.findAll(query);
    }
    create(dto) {
        return this.islandsService.create(dto);
    }
    getMap() {
        return this.islandsService.getMap();
    }
    getArcs(id) {
        return this.islandsService.getArcs(id);
    }
    findDetails(id, arcId) {
        if (!arcId) {
            throw new common_1.BadRequestException('arc_id é obrigatório');
        }
        return this.islandsService.findDetails(id, Number(arcId));
    }
    createBulk(dtos) {
        return this.islandsService.createBulk(dtos);
    }
    update(id, dto) {
        return this.islandsService.update(id, dto);
    }
    remove(id) {
        return this.islandsService.remove(id);
    }
};
exports.IslandsController = IslandsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Listar ilhas com filtros e paginação' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de ilhas retornada com sucesso.' }),
    (0, require_permissions_decorator_1.RequirePermissions)('islands.view'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_island_dto_1.FilterIslandDto]),
    __metadata("design:returntype", void 0)
], IslandsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Criar uma nova ilha no mapa' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Ilha criada com sucesso.' }),
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
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Já existe uma ilha com este nome ou conflito de vínculos.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 409,
                message: 'Já existe uma ilha com este nome ou conflito de vínculos.',
                error: 'Conflict',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('islands.create'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_island_dto_1.CreateIslandDto]),
    __metadata("design:returntype", void 0)
], IslandsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obter mapa completo das ilhas', description: 'Retorna uma lista otimizada com coordenadas 3D para renderização.' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Mapa de ilhas retornado com sucesso.' }),
    (0, require_permissions_decorator_1.RequirePermissions)('islands.view'),
    (0, common_1.Get)('map'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IslandsController.prototype, "getMap", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obter arcos de uma ilha específica', description: 'Lista todos os arcos temporais vinculados a esta ilha.' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID numérico da ilha', type: 'integer' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Arcos da ilha retornados com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Ilha não encontrada.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Ilha não encontrada.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('islands.view'),
    (0, common_1.Get)(':id/arcs'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], IslandsController.prototype, "getArcs", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obter detalhes cronológicos de uma ilha', description: 'Retorna a ilha filtrada por um arco, garantindo precisão temporal dos personagens.' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID numérico da ilha', type: 'integer' }),
    (0, swagger_1.ApiQuery)({ name: 'arc_id', description: 'Filtro obrigatório do arco temporal', type: 'integer', required: true }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Detalhes da ilha retornados com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'O parâmetro arc_id é obrigatório ou arco não pertence à ilha.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 400,
                message: 'O parâmetro arc_id é obrigatório ou arco não pertence à ilha.',
                error: 'Bad Request',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Ilha não encontrada.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Ilha não encontrada.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('islands.view'),
    (0, common_1.Get)(':id/details'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('arc_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], IslandsController.prototype, "findDetails", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Criar múltiplas ilhas em lote' }),
    (0, swagger_1.ApiBody)({ type: [create_island_dto_1.CreateIslandDto] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Ilhas criadas com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Arcos não encontrados.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Arcos não encontrados.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Conflito de nome ou vínculos duplicados.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 409,
                message: 'Conflito de nome ou vínculos duplicados.',
                error: 'Conflict',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('islands.create'),
    (0, common_1.Post)('bulk'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], IslandsController.prototype, "createBulk", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar os dados de uma ilha existente' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Ilha atualizada com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Ilha não encontrada.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Ilha não encontrada.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('islands.update'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_island_dto_1.UpdateIslandDto]),
    __metadata("design:returntype", void 0)
], IslandsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Remover uma ilha do mapa (Soft Delete)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Ilha removida com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Ilha não encontrada.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Ilha não encontrada.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('islands.delete'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], IslandsController.prototype, "remove", null);
exports.IslandsController = IslandsController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiTags)('Islands'),
    (0, common_1.Controller)('islands'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, permissions_guard_1.PermissionsGuard),
    (0, api_default_responses_decorator_1.ApiDefaultResponses)(),
    (0, swagger_1.ApiExtraModels)(error_response_dto_1.ErrorResponseDto),
    __metadata("design:paramtypes", [islands_service_1.IslandsService])
], IslandsController);
//# sourceMappingURL=islands.controller.js.map