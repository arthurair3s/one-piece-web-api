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
exports.CharactersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const permissions_guard_1 = require("../common/guards/permissions.guard");
const require_permissions_decorator_1 = require("../common/decorators/require-permissions.decorator");
const characters_service_1 = require("./characters.service");
const create_character_dto_1 = require("./dtos/create-character.dto");
const character_filter_dto_1 = require("./dtos/character-filter.dto");
const update_character_dto_1 = require("./dtos/update-character.dto");
const api_default_responses_decorator_1 = require("../common/decorators/api-default-responses.decorator");
const error_response_dto_1 = require("../common/dtos/error-response.dto");
let CharactersController = class CharactersController {
    constructor(charactersService) {
        this.charactersService = charactersService;
    }
    create(body) {
        return this.charactersService.create(body);
    }
    createBulk(bodies) {
        return this.charactersService.createBulk(bodies);
    }
    findAll(params) {
        return this.charactersService.findAll(params);
    }
    findOne(id) {
        return this.charactersService.findOne(id);
    }
    update(id, body) {
        return this.charactersService.update(id, body);
    }
    remove(id) {
        return this.charactersService.remove(id);
    }
};
exports.CharactersController = CharactersController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo personagem' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Personagem criado com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Personagem com o slug informado já existe.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 409,
                message: 'Personagem com o slug informado já existe.',
                error: 'Conflict',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('characters.create'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_character_dto_1.CreateCharacterDto]),
    __metadata("design:returntype", void 0)
], CharactersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Criar múltiplos personagens em lote (Bulk)' }),
    (0, swagger_1.ApiBody)({ type: [create_character_dto_1.CreateCharacterDto] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Personagens criados em lote com sucesso.' }),
    (0, require_permissions_decorator_1.RequirePermissions)('characters.create'),
    (0, common_1.Post)('bulk'),
    __param(0, (0, common_1.Body)(new common_1.ParseArrayPipe({ items: create_character_dto_1.CreateCharacterDto }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], CharactersController.prototype, "createBulk", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Listar personagens com filtros e paginação' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de personagens retornada com sucesso.' }),
    (0, require_permissions_decorator_1.RequirePermissions)('characters.view'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [character_filter_dto_1.CharacterFilterDto]),
    __metadata("design:returntype", void 0)
], CharactersController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Buscar personagem pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Personagem encontrado.' }),
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
    (0, require_permissions_decorator_1.RequirePermissions)('characters.view'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CharactersController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar um personagem existente' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Personagem atualizado com sucesso.' }),
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
    (0, require_permissions_decorator_1.RequirePermissions)('characters.update'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_character_dto_1.UpdateCharacterDto]),
    __metadata("design:returntype", void 0)
], CharactersController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Remover um personagem (Soft Delete)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Personagem removido com sucesso.' }),
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
    (0, require_permissions_decorator_1.RequirePermissions)('characters.delete'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CharactersController.prototype, "remove", null);
exports.CharactersController = CharactersController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiTags)('Characters'),
    (0, common_1.Controller)('characters'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, permissions_guard_1.PermissionsGuard),
    (0, api_default_responses_decorator_1.ApiDefaultResponses)(),
    (0, swagger_1.ApiExtraModels)(error_response_dto_1.ErrorResponseDto),
    __metadata("design:paramtypes", [characters_service_1.CharactersService])
], CharactersController);
//# sourceMappingURL=characters.controller.js.map