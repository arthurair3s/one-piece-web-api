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
exports.WikiController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const permissions_guard_1 = require("../common/guards/permissions.guard");
const require_permissions_decorator_1 = require("../common/decorators/require-permissions.decorator");
const wiki_map_filter_dto_1 = require("./dtos/wiki-map-filter.dto");
const wiki_island_context_dto_1 = require("./dtos/wiki-island-context.dto");
const get_wiki_sagas_query_1 = require("./queries/impl/get-wiki-sagas.query");
const get_wiki_arcs_query_1 = require("./queries/impl/get-wiki-arcs.query");
const get_wiki_map_query_1 = require("./queries/impl/get-wiki-map.query");
const get_wiki_map_filtered_query_1 = require("./queries/impl/get-wiki-map-filtered.query");
const get_wiki_island_query_1 = require("./queries/impl/get-wiki-island.query");
const get_wiki_island_arc_query_1 = require("./queries/impl/get-wiki-island-arc.query");
const api_default_responses_decorator_1 = require("../common/decorators/api-default-responses.decorator");
const error_response_dto_1 = require("../common/dtos/error-response.dto");
let WikiController = class WikiController {
    constructor(queryBus) {
        this.queryBus = queryBus;
    }
    getSagas() {
        return this.queryBus.execute(new get_wiki_sagas_query_1.GetWikiSagasQuery());
    }
    getArcs(sagaId) {
        return this.queryBus.execute(new get_wiki_arcs_query_1.GetWikiArcsQuery(sagaId ? Number(sagaId) : undefined));
    }
    getMap() {
        return this.queryBus.execute(new get_wiki_map_query_1.GetWikiMapQuery());
    }
    getMapFiltered(filters) {
        return this.queryBus.execute(new get_wiki_map_filtered_query_1.GetWikiMapFilteredQuery(filters.sagaId, filters.arcId, filters.search));
    }
    getIsland(id, context) {
        return this.queryBus.execute(new get_wiki_island_query_1.GetWikiIslandQuery(id, context.sagaId, context.arcId));
    }
    getIslandArc(islandId, arcId) {
        return this.queryBus.execute(new get_wiki_island_arc_query_1.GetWikiIslandArcQuery(islandId, arcId));
    }
};
exports.WikiController = WikiController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Listar sagas para o dropdown do HUD' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de sagas retornada.' }),
    (0, require_permissions_decorator_1.RequirePermissions)('wiki.read'),
    (0, common_1.Get)('sagas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WikiController.prototype, "getSagas", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Listar arcos para o scroll horizontal do HUD' }),
    (0, swagger_1.ApiQuery)({ name: 'sagaId', required: false, type: Number, description: 'Filtro por saga' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de arcos retornada.' }),
    (0, require_permissions_decorator_1.RequirePermissions)('wiki.read'),
    (0, common_1.Get)('arcs'),
    __param(0, (0, common_1.Query)('sagaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WikiController.prototype, "getArcs", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Carregar mapa 3D completo (first login)', description: 'Retorna todas as ilhas ativas com coordenadas para renderização no Three.js.' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Mapa retornado.' }),
    (0, require_permissions_decorator_1.RequirePermissions)('wiki.read'),
    (0, common_1.Get)('map'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WikiController.prototype, "getMap", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Carregar mapa 3D filtrado', description: 'Atualiza o mapa conforme os filtros ativos do HUD (saga, arco, busca).' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Mapa filtrado retornado.' }),
    (0, require_permissions_decorator_1.RequirePermissions)('wiki.read'),
    (0, common_1.Get)('map/filter'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [wiki_map_filter_dto_1.WikiMapFilterDto]),
    __metadata("design:returntype", void 0)
], WikiController.prototype, "getMapFiltered", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obter detalhes de uma ilha', description: 'Retorna descrição e arcos da ilha, filtrados pelo contexto ativo do HUD.' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'ID da ilha' }),
    (0, swagger_1.ApiQuery)({ name: 'sagaId', required: false, type: Number, description: 'Contexto de saga ativo' }),
    (0, swagger_1.ApiQuery)({ name: 'arcId', required: false, type: Number, description: 'Contexto de arco ativo' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Detalhes da ilha retornados.' }),
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
    (0, require_permissions_decorator_1.RequirePermissions)('wiki.read'),
    (0, common_1.Get)('islands/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, wiki_island_context_dto_1.WikiIslandContextDto]),
    __metadata("design:returntype", void 0)
], WikiController.prototype, "getIsland", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obter personagens e eventos de um arco em uma ilha', description: 'Retorna personagens do arco e eventos que ocorreram nesta ilha durante este arco.' }),
    (0, swagger_1.ApiParam)({ name: 'islandId', type: Number, description: 'ID da ilha' }),
    (0, swagger_1.ApiParam)({ name: 'arcId', type: Number, description: 'ID do arco' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Conteúdo retornado.' }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Arco não vinculado à ilha.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 400,
                message: 'Arco não vinculado à ilha.',
                error: 'Bad Request',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('wiki.read'),
    (0, common_1.Get)('islands/:islandId/arcs/:arcId'),
    __param(0, (0, common_1.Param)('islandId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('arcId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], WikiController.prototype, "getIslandArc", null);
exports.WikiController = WikiController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiTags)('Wiki'),
    (0, common_1.Controller)('wiki'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, permissions_guard_1.PermissionsGuard),
    (0, api_default_responses_decorator_1.ApiDefaultResponses)(),
    (0, swagger_1.ApiExtraModels)(error_response_dto_1.ErrorResponseDto),
    __metadata("design:paramtypes", [cqrs_1.QueryBus])
], WikiController);
//# sourceMappingURL=wiki.controller.js.map