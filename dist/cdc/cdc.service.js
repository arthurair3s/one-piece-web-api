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
var CdcService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdcService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const event_read_model_1 = require("../events/models/event-read.model");
const character_read_model_1 = require("../characters/models/character-read.model");
const character_version_read_model_1 = require("../character-versions/models/character-version-read.model");
const event_participant_read_model_1 = require("../events/models/event-participant-read.model");
const island_read_model_1 = require("../islands/models/island-read.model");
const arc_read_model_1 = require("../arcs/models/arc-read.model");
const arc_island_read_model_1 = require("../arcs/models/arc-island-read.model");
const saga_read_model_1 = require("../sagas/models/saga-read.model");
const arc_character_version_read_model_1 = require("../arcs/models/arc-character-version-read.model");
let CdcService = CdcService_1 = class CdcService {
    constructor(eventReadModel, characterReadModel, characterVersionReadModel, eventParticipantReadModel, islandReadModel, arcReadModel, arcIslandReadModel, sagaReadModel, arcCharacterVersionReadModel) {
        this.eventReadModel = eventReadModel;
        this.characterReadModel = characterReadModel;
        this.characterVersionReadModel = characterVersionReadModel;
        this.eventParticipantReadModel = eventParticipantReadModel;
        this.islandReadModel = islandReadModel;
        this.arcReadModel = arcReadModel;
        this.arcIslandReadModel = arcIslandReadModel;
        this.sagaReadModel = sagaReadModel;
        this.arcCharacterVersionReadModel = arcCharacterVersionReadModel;
        this.logger = new common_1.Logger(CdcService_1.name);
    }
    async processEventChange(payload) {
        this.logger.log(`Processando CDC Event com op: ${payload.op}`);
        try {
            if (payload.op === 'c' || payload.op === 'r') {
                const data = payload.after;
                if (!data)
                    return;
                await this.eventReadModel.upsert({
                    id: data.id,
                    arc_island_id: data.arc_island_id,
                    title: data.title,
                    description: data.description,
                    type: data.type,
                    order: data.order,
                });
                this.logger.log(`[CDC] EventRead criado/upserted para ID: ${data.id}`);
            }
            else if (payload.op === 'u') {
                const data = payload.after;
                const beforeData = payload.before;
                if (!data)
                    return;
                if (data.deletedAt && (!beforeData || !beforeData.deletedAt)) {
                    await this.eventReadModel.destroy({ where: { id: data.id } });
                    this.logger.log(`[CDC] EventRead marcado como deletado (Soft Delete) para ID: ${data.id}`);
                }
                else {
                    if (beforeData && beforeData.deletedAt && !data.deletedAt) {
                        await this.eventReadModel.restore({ where: { id: data.id } });
                        this.logger.log(`[CDC] EventRead restaurado para ID: ${data.id}`);
                    }
                    await this.eventReadModel.update({
                        arc_island_id: data.arc_island_id,
                        title: data.title,
                        description: data.description,
                        type: data.type,
                        order: data.order,
                    }, { where: { id: data.id } });
                    this.logger.log(`[CDC] EventRead atualizado para ID: ${data.id}`);
                }
            }
            else if (payload.op === 'd') {
                const data = payload.before;
                if (!data)
                    return;
                await this.eventReadModel.destroy({ where: { id: data.id } });
                this.logger.log(`[CDC] EventRead deletado para ID: ${data.id}`);
            }
        }
        catch (error) {
            this.logger.error(`Erro no CDC Event: ${error.message}`, error.stack);
        }
    }
    async processCharacterChange(payload) {
        try {
            if (payload.op === 'c' || payload.op === 'r') {
                const data = payload.after;
                if (!data)
                    return;
                await this.characterReadModel.upsert(data);
                this.logger.log(`[CDC] CharacterRead criado/upserted para ID: ${data.id}`);
            }
            else if (payload.op === 'u') {
                const data = payload.after;
                if (!data)
                    return;
                if (data.deletedAt && (!payload.before || !payload.before.deletedAt)) {
                    await this.characterReadModel.destroy({ where: { id: data.id } });
                    this.logger.log(`[CDC] CharacterRead marcado como deletado (Soft Delete) para ID: ${data.id}`);
                }
                else {
                    if (payload.before && payload.before.deletedAt && !data.deletedAt) {
                        await this.characterReadModel.restore({ where: { id: data.id } });
                        this.logger.log(`[CDC] CharacterRead restaurado para ID: ${data.id}`);
                    }
                    await this.characterReadModel.update(data, { where: { id: data.id } });
                    this.logger.log(`[CDC] CharacterRead atualizado para ID: ${data.id}`);
                }
            }
            else if (payload.op === 'd') {
                const data = payload.before;
                if (!data)
                    return;
                await this.characterReadModel.destroy({ where: { id: data.id } });
                this.logger.log(`[CDC] CharacterRead deletado para ID: ${data.id}`);
            }
        }
        catch (error) {
            this.logger.error(`Erro no CDC Character: ${error.message}`, error.stack);
        }
    }
    async processCharacterVersionChange(payload) {
        try {
            if (payload.op === 'c' || payload.op === 'r') {
                const data = payload.after;
                if (!data)
                    return;
                await this.characterVersionReadModel.upsert(data);
                this.logger.log(`[CDC] CharacterVersionRead criado/upserted para ID: ${data.id}`);
            }
            else if (payload.op === 'u') {
                const data = payload.after;
                if (!data)
                    return;
                if (data.deletedAt && (!payload.before || !payload.before.deletedAt)) {
                    await this.characterVersionReadModel.destroy({ where: { id: data.id } });
                    this.logger.log(`[CDC] CharacterVersionRead marcado como deletado (Soft Delete) para ID: ${data.id}`);
                }
                else {
                    if (payload.before && payload.before.deletedAt && !data.deletedAt) {
                        await this.characterVersionReadModel.restore({ where: { id: data.id } });
                        this.logger.log(`[CDC] CharacterVersionRead restaurado para ID: ${data.id}`);
                    }
                    await this.characterVersionReadModel.update(data, { where: { id: data.id } });
                    this.logger.log(`[CDC] CharacterVersionRead atualizado para ID: ${data.id}`);
                }
            }
            else if (payload.op === 'd') {
                const data = payload.before;
                if (!data)
                    return;
                await this.characterVersionReadModel.destroy({ where: { id: data.id } });
                this.logger.log(`[CDC] CharacterVersionRead deletado para ID: ${data.id}`);
            }
        }
        catch (error) {
            this.logger.error(`Erro no CDC CharacterVersion: ${error.message}`, error.stack);
        }
    }
    async processEventParticipantChange(payload) {
        try {
            if (payload.op === 'c' || payload.op === 'r') {
                const data = payload.after;
                if (!data)
                    return;
                await this.eventParticipantReadModel.upsert(data);
                this.logger.log(`[CDC] EventParticipantRead criado/upserted para ID: ${data.id}`);
            }
            else if (payload.op === 'u') {
                const data = payload.after;
                if (!data)
                    return;
                if (data.deletedAt && (!payload.before || !payload.before.deletedAt)) {
                    await this.eventParticipantReadModel.destroy({ where: { id: data.id } });
                    this.logger.log(`[CDC] EventParticipantRead marcado como deletado (Soft Delete) para ID: ${data.id}`);
                }
                else {
                    if (payload.before && payload.before.deletedAt && !data.deletedAt) {
                        await this.eventParticipantReadModel.restore({ where: { id: data.id } });
                        this.logger.log(`[CDC] EventParticipantRead restaurado para ID: ${data.id}`);
                    }
                    await this.eventParticipantReadModel.update(data, { where: { id: data.id } });
                    this.logger.log(`[CDC] EventParticipantRead atualizado para ID: ${data.id}`);
                }
            }
            else if (payload.op === 'd') {
                const data = payload.before;
                if (!data)
                    return;
                await this.eventParticipantReadModel.destroy({ where: { id: data.id } });
                this.logger.log(`[CDC] EventParticipantRead deletado para ID: ${data.id}`);
            }
        }
        catch (error) {
            this.logger.error(`Erro no CDC EventParticipant: ${error.message}`, error.stack);
        }
    }
    async processIslandChange(payload) {
        try {
            if (payload.op === 'c' || payload.op === 'r') {
                const data = payload.after;
                if (!data)
                    return;
                await this.islandReadModel.upsert(data);
                this.logger.log(`[CDC] IslandRead criado/upserted para ID: ${data.id}`);
            }
            else if (payload.op === 'u') {
                const data = payload.after;
                if (!data)
                    return;
                if (data.deletedAt && (!payload.before || !payload.before.deletedAt)) {
                    await this.islandReadModel.destroy({ where: { id: data.id } });
                    this.logger.log(`[CDC] IslandRead marcado como deletado (Soft Delete) para ID: ${data.id}`);
                }
                else {
                    if (payload.before && payload.before.deletedAt && !data.deletedAt) {
                        await this.islandReadModel.restore({ where: { id: data.id } });
                        this.logger.log(`[CDC] IslandRead restaurado para ID: ${data.id}`);
                    }
                    await this.islandReadModel.update(data, { where: { id: data.id } });
                    this.logger.log(`[CDC] IslandRead atualizado para ID: ${data.id}`);
                }
            }
            else if (payload.op === 'd') {
                const data = payload.before;
                if (!data)
                    return;
                await this.islandReadModel.destroy({ where: { id: data.id } });
                this.logger.log(`[CDC] IslandRead deletado para ID: ${data.id}`);
            }
        }
        catch (error) {
            this.logger.error(`Erro no CDC Island: ${error.message}`, error.stack);
        }
    }
    async processArcChange(payload) {
        try {
            if (payload.op === 'c' || payload.op === 'r') {
                const data = payload.after;
                if (!data)
                    return;
                await this.arcReadModel.upsert(data);
                this.logger.log(`[CDC] ArcRead criado/upserted para ID: ${data.id}`);
            }
            else if (payload.op === 'u') {
                const data = payload.after;
                if (!data)
                    return;
                if (data.deletedAt && (!payload.before || !payload.before.deletedAt)) {
                    await this.arcReadModel.destroy({ where: { id: data.id } });
                    this.logger.log(`[CDC] ArcRead marcado como deletado (Soft Delete) para ID: ${data.id}`);
                }
                else {
                    if (payload.before && payload.before.deletedAt && !data.deletedAt) {
                        await this.arcReadModel.restore({ where: { id: data.id } });
                        this.logger.log(`[CDC] ArcRead restaurado para ID: ${data.id}`);
                    }
                    await this.arcReadModel.update(data, { where: { id: data.id } });
                    this.logger.log(`[CDC] ArcRead atualizado para ID: ${data.id}`);
                }
            }
            else if (payload.op === 'd') {
                const data = payload.before;
                if (!data)
                    return;
                await this.arcReadModel.destroy({ where: { id: data.id } });
                this.logger.log(`[CDC] ArcRead deletado para ID: ${data.id}`);
            }
        }
        catch (error) {
            this.logger.error(`Erro no CDC Arc: ${error.message}`, error.stack);
        }
    }
    async processArcIslandChange(payload) {
        try {
            if (payload.op === 'c' || payload.op === 'r') {
                const data = payload.after;
                if (!data)
                    return;
                await this.arcIslandReadModel.upsert(data);
                this.logger.log(`[CDC] ArcIslandRead criado/upserted para ID: ${data.id}`);
            }
            else if (payload.op === 'u') {
                const data = payload.after;
                if (!data)
                    return;
                if (data.deletedAt && (!payload.before || !payload.before.deletedAt)) {
                    await this.arcIslandReadModel.destroy({ where: { id: data.id } });
                    this.logger.log(`[CDC] ArcIslandRead marcado como deletado (Soft Delete) para ID: ${data.id}`);
                }
                else {
                    if (payload.before && payload.before.deletedAt && !data.deletedAt) {
                        await this.arcIslandReadModel.restore({ where: { id: data.id } });
                        this.logger.log(`[CDC] ArcIslandRead restaurado para ID: ${data.id}`);
                    }
                    await this.arcIslandReadModel.update(data, { where: { id: data.id } });
                    this.logger.log(`[CDC] ArcIslandRead atualizado para ID: ${data.id}`);
                }
            }
            else if (payload.op === 'd') {
                const data = payload.before;
                if (!data)
                    return;
                await this.arcIslandReadModel.destroy({ where: { id: data.id } });
                this.logger.log(`[CDC] ArcIslandRead deletado para ID: ${data.id}`);
            }
        }
        catch (error) {
            this.logger.error(`Erro no CDC ArcIsland: ${error.message}`, error.stack);
        }
    }
    async processSagaChange(payload) {
        try {
            if (payload.op === 'c' || payload.op === 'r') {
                const data = payload.after;
                if (!data)
                    return;
                await this.sagaReadModel.upsert(data);
                this.logger.log(`[CDC] SagaRead criado/upserted para ID: ${data.id}`);
            }
            else if (payload.op === 'u') {
                const data = payload.after;
                if (!data)
                    return;
                if (data.deletedAt && (!payload.before || !payload.before.deletedAt)) {
                    await this.sagaReadModel.destroy({ where: { id: data.id } });
                    this.logger.log(`[CDC] SagaRead marcado como deletado (Soft Delete) para ID: ${data.id}`);
                }
                else {
                    if (payload.before && payload.before.deletedAt && !data.deletedAt) {
                        await this.sagaReadModel.restore({ where: { id: data.id } });
                        this.logger.log(`[CDC] SagaRead restaurado para ID: ${data.id}`);
                    }
                    await this.sagaReadModel.update(data, { where: { id: data.id } });
                    this.logger.log(`[CDC] SagaRead atualizado para ID: ${data.id}`);
                }
            }
            else if (payload.op === 'd') {
                const data = payload.before;
                if (!data)
                    return;
                await this.sagaReadModel.destroy({ where: { id: data.id } });
                this.logger.log(`[CDC] SagaRead deletado para ID: ${data.id}`);
            }
        }
        catch (error) {
            this.logger.error(`Erro no CDC Saga: ${error.message}`, error.stack);
        }
    }
    async processArcCharacterVersionChange(payload) {
        try {
            if (payload.op === 'c' || payload.op === 'r') {
                const data = payload.after;
                if (!data)
                    return;
                await this.arcCharacterVersionReadModel.upsert(data);
                this.logger.log(`[CDC] ArcCharacterVersionRead criado/upserted para ID: ${data.id}`);
            }
            else if (payload.op === 'u') {
                const data = payload.after;
                if (!data)
                    return;
                if (data.deletedAt && (!payload.before || !payload.before.deletedAt)) {
                    await this.arcCharacterVersionReadModel.destroy({ where: { id: data.id } });
                    this.logger.log(`[CDC] ArcCharacterVersionRead marcado como deletado (Soft Delete) para ID: ${data.id}`);
                }
                else {
                    if (payload.before && payload.before.deletedAt && !data.deletedAt) {
                        await this.arcCharacterVersionReadModel.restore({ where: { id: data.id } });
                        this.logger.log(`[CDC] ArcCharacterVersionRead restaurado para ID: ${data.id}`);
                    }
                    await this.arcCharacterVersionReadModel.update(data, { where: { id: data.id } });
                    this.logger.log(`[CDC] ArcCharacterVersionRead atualizado para ID: ${data.id}`);
                }
            }
            else if (payload.op === 'd') {
                const data = payload.before;
                if (!data)
                    return;
                await this.arcCharacterVersionReadModel.destroy({ where: { id: data.id } });
                this.logger.log(`[CDC] ArcCharacterVersionRead deletado para ID: ${data.id}`);
            }
        }
        catch (error) {
            this.logger.error(`Erro no CDC ArcCharacterVersion: ${error.message}`, error.stack);
        }
    }
};
exports.CdcService = CdcService;
exports.CdcService = CdcService = CdcService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(event_read_model_1.EventRead, 'read-db')),
    __param(1, (0, sequelize_1.InjectModel)(character_read_model_1.CharacterRead, 'read-db')),
    __param(2, (0, sequelize_1.InjectModel)(character_version_read_model_1.CharacterVersionRead, 'read-db')),
    __param(3, (0, sequelize_1.InjectModel)(event_participant_read_model_1.EventParticipantRead, 'read-db')),
    __param(4, (0, sequelize_1.InjectModel)(island_read_model_1.IslandRead, 'read-db')),
    __param(5, (0, sequelize_1.InjectModel)(arc_read_model_1.ArcRead, 'read-db')),
    __param(6, (0, sequelize_1.InjectModel)(arc_island_read_model_1.ArcIslandRead, 'read-db')),
    __param(7, (0, sequelize_1.InjectModel)(saga_read_model_1.SagaRead, 'read-db')),
    __param(8, (0, sequelize_1.InjectModel)(arc_character_version_read_model_1.ArcCharacterVersionRead, 'read-db')),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object])
], CdcService);
//# sourceMappingURL=cdc.service.js.map