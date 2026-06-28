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
exports.CharacterVersionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const permissions_guard_1 = require("../common/guards/permissions.guard");
const require_permissions_decorator_1 = require("../common/decorators/require-permissions.decorator");
const character_versions_service_1 = require("./character-versions.service");
const create_character_version_dto_1 = require("./dtos/create-character-version.dto");
const update_character_version_dto_1 = require("./dtos/update-character-version.dto");
const character_version_filter_dto_1 = require("./dtos/character-version-filter.dto");
const api_default_responses_decorator_1 = require("../common/decorators/api-default-responses.decorator");
const error_response_dto_1 = require("../common/dtos/error-response.dto");
let CharacterVersionsController = class CharacterVersionsController {
    constructor(characterVersionsService) {
        this.characterVersionsService = characterVersionsService;
    }
    create(body) {
        return this.characterVersionsService.create(body);
    }
    createBulk(bodies) {
        return this.characterVersionsService.createBulk(bodies);
    }
    findAll(params) {
        return this.characterVersionsService.findAll(params);
    }
    findOne(id) {
        return this.characterVersionsService.findOne(id);
    }
    update(id, body) {
        return this.characterVersionsService.update(id, body);
    }
    remove(id) {
        return this.characterVersionsService.remove(id);
    }
};
exports.CharacterVersionsController = CharacterVersionsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Criar uma nova versão de personagem' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Versão de personagem criada com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Personagem não encontrado.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Personagem não encontrado.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('character_versions.create'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_character_version_dto_1.CreateCharacterVersionDto]),
    __metadata("design:returntype", void 0)
], CharacterVersionsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Criar múltiplas versões de personagens em lote (Bulk)' }),
    (0, swagger_1.ApiBody)({ type: [create_character_version_dto_1.CreateCharacterVersionDto] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Versões de personagens criadas em lote com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Um ou mais Characters ou Arcos informados não existem.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Um ou mais Characters ou Arcos informados não existem.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('character_versions.create'),
    (0, common_1.Post)('bulk'),
    __param(0, (0, common_1.Body)(new common_1.ParseArrayPipe({ items: create_character_version_dto_1.CreateCharacterVersionDto }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], CharacterVersionsController.prototype, "createBulk", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Listar versões de personagens com filtros' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de versões retornada com sucesso.' }),
    (0, require_permissions_decorator_1.RequirePermissions)('character_versions.view'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [character_version_filter_dto_1.CharacterVersionFilterDto]),
    __metadata("design:returntype", void 0)
], CharacterVersionsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Buscar versão de personagem pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Versão de personagem encontrada.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Versão de personagem não encontrada.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Versão de personagem não encontrada.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('character_versions.view'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CharacterVersionsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar uma versão de personagem' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Versão de personagem atualizada com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Versão de personagem não encontrada.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Versão de personagem não encontrada.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('character_versions.update'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_character_version_dto_1.UpdateCharacterVersionDto]),
    __metadata("design:returntype", void 0)
], CharacterVersionsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Remover uma versão de personagem (Soft Delete)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Versão de personagem removida com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Versão de personagem não encontrada.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Versão de personagem não encontrada.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('character_versions.delete'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CharacterVersionsController.prototype, "remove", null);
exports.CharacterVersionsController = CharacterVersionsController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiTags)('CharacterVersions'),
    (0, common_1.Controller)('character-versions'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, permissions_guard_1.PermissionsGuard),
    (0, api_default_responses_decorator_1.ApiDefaultResponses)(),
    (0, swagger_1.ApiExtraModels)(error_response_dto_1.ErrorResponseDto),
    __metadata("design:paramtypes", [character_versions_service_1.CharacterVersionsService])
], CharacterVersionsController);
//# sourceMappingURL=character-versions.controller.js.map