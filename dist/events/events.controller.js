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
exports.EventsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const permissions_guard_1 = require("../common/guards/permissions.guard");
const require_permissions_decorator_1 = require("../common/decorators/require-permissions.decorator");
const events_service_1 = require("./events.service");
const create_event_dto_1 = require("./dtos/create-event.dto");
const update_event_dto_1 = require("./dtos/update-event.dto");
const event_filter_dto_1 = require("./dtos/event-filter.dto");
const api_default_responses_decorator_1 = require("../common/decorators/api-default-responses.decorator");
const error_response_dto_1 = require("../common/dtos/error-response.dto");
let EventsController = class EventsController {
    constructor(eventsService) {
        this.eventsService = eventsService;
    }
    create(createEventDto) {
        return this.eventsService.create(createEventDto);
    }
    createBulk(dtos) {
        return this.eventsService.createBulk(dtos);
    }
    findAll(query) {
        return this.eventsService.findAll(query);
    }
    findOne(id) {
        return this.eventsService.findOne(id);
    }
    getParticipants(id) {
        return this.eventsService.getParticipants(id);
    }
    addParticipant(id, character_version_id) {
        return this.eventsService.addParticipant(id, character_version_id);
    }
    removeParticipant(id, character_version_id) {
        return this.eventsService.removeParticipant(id, character_version_id);
    }
    update(id, updateEventDto) {
        return this.eventsService.update(id, updateEventDto);
    }
    remove(id) {
        return this.eventsService.remove(id);
    }
};
exports.EventsController = EventsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Registrar um novo evento histórico' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Evento criado com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Contexto arco-ilha não encontrado.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Contexto arco-ilha não encontrado.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Já existe um evento com esta ordem neste contexto.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 409,
                message: 'Já existe um evento com esta ordem neste contexto.',
                error: 'Conflict',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('events.create'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_event_dto_1.CreateEventDto]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Registrar múltiplos eventos em lote' }),
    (0, swagger_1.ApiBody)({ type: [create_event_dto_1.CreateEventDto] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Eventos criados com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Contextos arco-ilha não encontrados.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Contextos arco-ilha não encontrados.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Conflito de ordem no mesmo contexto arco-ilha.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 409,
                message: 'Conflito de ordem no mesmo contexto arco-ilha.',
                error: 'Conflict',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('events.create'),
    (0, common_1.Post)('bulk'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "createBulk", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Listar eventos com filtros e paginação' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de eventos retornada com sucesso.' }),
    (0, require_permissions_decorator_1.RequirePermissions)('events.view'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [event_filter_dto_1.EventFilterDto]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Buscar um evento específico pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Evento encontrado.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Evento não encontrado.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Evento não encontrado.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('events.view'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Listar personagens participantes de um evento' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Participantes retornados com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Evento não encontrado.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Evento não encontrado.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('events.view'),
    (0, common_1.Get)(':id/participants'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "getParticipants", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Adicionar personagem (versão) como participante de um evento' }),
    (0, swagger_1.ApiBody)({ schema: { properties: { character_version_id: { type: 'number', example: 1 } } } }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Participante adicionado com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Evento ou versão de personagem não encontrado.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Evento ou versão de personagem não encontrado.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Participante já vinculado a este evento.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 409,
                message: 'Participante já vinculado a este evento.',
                error: 'Conflict',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('events.create'),
    (0, common_1.Post)(':id/participants'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('character_version_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "addParticipant", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Remover personagem (versão) de um evento' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Participante removido com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Participante não encontrado neste evento.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Participante não encontrado neste evento.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('events.delete'),
    (0, common_1.Delete)(':id/participants/:character_version_id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('character_version_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "removeParticipant", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar dados de um evento existente' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Evento atualizado com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Evento não encontrado.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Evento não encontrado.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('events.update'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_event_dto_1.UpdateEventDto]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Remover um evento do sistema' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Evento removido com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Evento não encontrado.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Evento não encontrado.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('events.delete'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "remove", null);
exports.EventsController = EventsController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiTags)('Events'),
    (0, common_1.Controller)('events'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, permissions_guard_1.PermissionsGuard),
    (0, api_default_responses_decorator_1.ApiDefaultResponses)(),
    (0, swagger_1.ApiExtraModels)(error_response_dto_1.ErrorResponseDto),
    __metadata("design:paramtypes", [events_service_1.EventsService])
], EventsController);
//# sourceMappingURL=events.controller.js.map