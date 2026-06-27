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
var CdcController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdcController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const cdc_service_1 = require("./cdc.service");
let CdcController = CdcController_1 = class CdcController {
    constructor(cdcService) {
        this.cdcService = cdcService;
        this.logger = new common_1.Logger(CdcController_1.name);
    }
    async handleEventChange(message) {
        const payload = this.extractPayload(message);
        if (payload)
            await this.cdcService.processEventChange(payload);
    }
    async handleCharacterChange(message) {
        const payload = this.extractPayload(message);
        if (payload)
            await this.cdcService.processCharacterChange(payload);
    }
    async handleCharacterVersionChange(message) {
        const payload = this.extractPayload(message);
        if (payload)
            await this.cdcService.processCharacterVersionChange(payload);
    }
    async handleEventParticipantChange(message) {
        const payload = this.extractPayload(message);
        if (payload)
            await this.cdcService.processEventParticipantChange(payload);
    }
    async handleIslandChange(message) {
        const payload = this.extractPayload(message);
        if (payload)
            await this.cdcService.processIslandChange(payload);
    }
    async handleArcChange(message) {
        const payload = this.extractPayload(message);
        if (payload)
            await this.cdcService.processArcChange(payload);
    }
    async handleArcIslandChange(message) {
        const payload = this.extractPayload(message);
        if (payload)
            await this.cdcService.processArcIslandChange(payload);
    }
    async handleSagaChange(message) {
        const payload = this.extractPayload(message);
        if (payload)
            await this.cdcService.processSagaChange(payload);
    }
    async handleArcCharacterVersionChange(message) {
        const payload = this.extractPayload(message);
        if (payload)
            await this.cdcService.processArcCharacterVersionChange(payload);
    }
    extractPayload(message) {
        let payload = message;
        if (message && message.payload !== undefined) {
            payload = message.payload;
        }
        if (!payload || !payload.op) {
            this.logger.warn(`Mensagem recebida sem estrutura válida: ${JSON.stringify(message)}`);
            return null;
        }
        this.logger.log(`Recebido CDC: ${payload.source.table} [op=${payload.op}]`);
        return payload;
    }
};
exports.CdcController = CdcController;
__decorate([
    (0, microservices_1.MessagePattern)('pg.public.events'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CdcController.prototype, "handleEventChange", null);
__decorate([
    (0, microservices_1.MessagePattern)('pg.public.characters'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CdcController.prototype, "handleCharacterChange", null);
__decorate([
    (0, microservices_1.MessagePattern)('pg.public.character_versions'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CdcController.prototype, "handleCharacterVersionChange", null);
__decorate([
    (0, microservices_1.MessagePattern)('pg.public.event_participants'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CdcController.prototype, "handleEventParticipantChange", null);
__decorate([
    (0, microservices_1.MessagePattern)('pg.public.islands'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CdcController.prototype, "handleIslandChange", null);
__decorate([
    (0, microservices_1.MessagePattern)('pg.public.arcs'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CdcController.prototype, "handleArcChange", null);
__decorate([
    (0, microservices_1.MessagePattern)('pg.public.arc_islands'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CdcController.prototype, "handleArcIslandChange", null);
__decorate([
    (0, microservices_1.MessagePattern)('pg.public.sagas'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CdcController.prototype, "handleSagaChange", null);
__decorate([
    (0, microservices_1.MessagePattern)('pg.public.arc_character_versions'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CdcController.prototype, "handleArcCharacterVersionChange", null);
exports.CdcController = CdcController = CdcController_1 = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [cdc_service_1.CdcService])
], CdcController);
//# sourceMappingURL=cdc.controller.js.map