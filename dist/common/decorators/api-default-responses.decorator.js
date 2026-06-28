"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiDefaultResponses = ApiDefaultResponses;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
function ApiDefaultResponses() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBadRequestResponse)({
        description: 'Requisição inválida (Erro de validação ou parâmetros).',
        schema: {
            allOf: [{ $ref: '#/components/schemas/ErrorResponseDto' }],
            example: {
                statusCode: 400,
                message: 'Erro de validação nos dados enviados.',
                error: 'Bad Request',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path',
            },
        },
    }), (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Não autorizado (Token ausente ou inválido).',
        schema: {
            allOf: [{ $ref: '#/components/schemas/ErrorResponseDto' }],
            example: {
                statusCode: 401,
                message: 'Token ausente ou inválido.',
                error: 'Unauthorized',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path',
            },
        },
    }), (0, swagger_1.ApiForbiddenResponse)({
        description: 'Proibido (Falta de permissão).',
        schema: {
            allOf: [{ $ref: '#/components/schemas/ErrorResponseDto' }],
            example: {
                statusCode: 403,
                message: 'Sem permissão para acessar este recurso.',
                error: 'Forbidden',
                timestamp: '2026-06-03T20:42:05.123Z',
                path: '/api/example-path',
            },
        },
    }));
}
//# sourceMappingURL=api-default-responses.decorator.js.map