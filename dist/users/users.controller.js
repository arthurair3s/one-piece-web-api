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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const permissions_guard_1 = require("../common/guards/permissions.guard");
const require_permissions_decorator_1 = require("../common/decorators/require-permissions.decorator");
const swagger_1 = require("@nestjs/swagger");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dtos/create-user.dto");
const user_filter_dto_1 = require("./dtos/user-filter.dto");
const update_user_dto_1 = require("./dtos/update-user.dto");
const api_default_responses_decorator_1 = require("../common/decorators/api-default-responses.decorator");
const error_response_dto_1 = require("../common/dtos/error-response.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(body) {
        return this.usersService.create(body);
    }
    findAll(params) {
        return this.usersService.findAll(params);
    }
    findOne(id) {
        return this.usersService.findOne(id);
    }
    update(id, body) {
        return this.usersService.update(id, body);
    }
    remove(id) {
        return this.usersService.remove(id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo usuário no sistema' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Usuário criado com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Já existe um usuário com este username ou e-mail.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 409,
                message: 'Já existe um usuário com este username ou e-mail.',
                error: 'Conflict',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('users.create'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os usuários com filtros e paginação' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de usuários retornada com sucesso.' }),
    (0, require_permissions_decorator_1.RequirePermissions)('users.view'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_filter_dto_1.UserFilterDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Buscar dados de um usuário específico pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuário encontrado.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Usuário não encontrado.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Usuário não encontrado.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('users.view'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar os dados de um usuário existente' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuário atualizado com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Usuário não encontrado.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Usuário não encontrado.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('users.update'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Remover permanentemente um usuário (Soft Delete)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuário removido com sucesso.' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Usuário não encontrado.',
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(error_response_dto_1.ErrorResponseDto) }],
            example: {
                statusCode: 404,
                message: 'Usuário não encontrado.',
                error: 'Not Found',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path'
            }
        }
    }),
    (0, require_permissions_decorator_1.RequirePermissions)('users.delete'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, permissions_guard_1.PermissionsGuard),
    (0, api_default_responses_decorator_1.ApiDefaultResponses)(),
    (0, swagger_1.ApiExtraModels)(error_response_dto_1.ErrorResponseDto),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map