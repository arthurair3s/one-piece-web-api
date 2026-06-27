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
var CdcBypassService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdcBypassService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const cdc_service_1 = require("./cdc.service");
const saga_model_1 = require("../sagas/models/saga.model");
const island_model_1 = require("../islands/models/island.model");
const arc_model_1 = require("../arcs/models/arc.model");
const arc_island_model_1 = require("../arcs/models/arc-island.model");
const character_model_1 = require("../characters/models/character.model");
const character_version_model_1 = require("../character-versions/models/character-version.model");
const arc_character_version_model_1 = require("../arcs/models/arc-character-version.model");
const event_model_1 = require("../events/models/event.model");
const event_participant_model_1 = require("../events/models/event-participant.model");
const arc_island_read_model_1 = require("../arcs/models/arc-island-read.model");
const arc_character_version_read_model_1 = require("../arcs/models/arc-character-version-read.model");
const event_participant_read_model_1 = require("../events/models/event-participant-read.model");
let CdcBypassService = CdcBypassService_1 = class CdcBypassService {
    constructor(cdcService, arcIslandReadModel, arcCharacterVersionReadModel, eventParticipantReadModel) {
        this.cdcService = cdcService;
        this.arcIslandReadModel = arcIslandReadModel;
        this.arcCharacterVersionReadModel = arcCharacterVersionReadModel;
        this.eventParticipantReadModel = eventParticipantReadModel;
        this.logger = new common_1.Logger(CdcBypassService_1.name);
    }
    onModuleInit() {
        if (process.env.BYPASS_CDC !== 'true') {
            this.logger.log('Bypass de CDC inativo (modo de produção desativado ou executando localmente com Kafka).');
            return;
        }
        this.logger.log('⚠️ BYPASS_CDC ativo! Registrando hooks do Sequelize para replicação direta...');
        const modelsToBypass = [
            { model: saga_model_1.Saga, cdcMethod: 'processSagaChange' },
            { model: island_model_1.Island, cdcMethod: 'processIslandChange' },
            { model: arc_model_1.Arc, cdcMethod: 'processArcChange' },
            { model: arc_island_model_1.ArcIsland, cdcMethod: 'processArcIslandChange' },
            { model: character_model_1.Character, cdcMethod: 'processCharacterChange' },
            { model: character_version_model_1.CharacterVersion, cdcMethod: 'processCharacterVersionChange' },
            { model: arc_character_version_model_1.ArcCharacterVersion, cdcMethod: 'processArcCharacterVersionChange' },
            { model: event_model_1.Event, cdcMethod: 'processEventChange' },
            { model: event_participant_model_1.EventParticipant, cdcMethod: 'processEventParticipantChange' },
        ];
        for (const entry of modelsToBypass) {
            const model = entry.model;
            const modelName = model.name;
            model.addHook('afterCreate', async (instance) => {
                this.logger.log(`[Bypass CDC] afterCreate no modelo ${modelName} (ID: ${instance.id})`);
                try {
                    await this.cdcService[entry.cdcMethod]({
                        op: 'c',
                        before: null,
                        after: instance.toJSON(),
                        source: { table: model.tableName },
                        ts_ms: Date.now(),
                        transaction: null,
                    });
                }
                catch (err) {
                    this.logger.error(`Erro no afterCreate do bypass para ${modelName}: ${err.message}`);
                }
            });
            model.addHook('afterUpdate', async (instance) => {
                this.logger.log(`[Bypass CDC] afterUpdate no modelo ${modelName} (ID: ${instance.id})`);
                try {
                    await this.cdcService[entry.cdcMethod]({
                        op: 'u',
                        before: instance._previousDataValues,
                        after: instance.toJSON(),
                        source: { table: model.tableName },
                        ts_ms: Date.now(),
                        transaction: null,
                    });
                }
                catch (err) {
                    this.logger.error(`Erro no afterUpdate do bypass para ${modelName}: ${err.message}`);
                }
            });
            model.addHook('afterDestroy', async (instance) => {
                this.logger.log(`[Bypass CDC] afterDestroy no modelo ${modelName} (ID: ${instance.id})`);
                try {
                    await this.cdcService[entry.cdcMethod]({
                        op: 'd',
                        before: instance.toJSON(),
                        after: null,
                        source: { table: model.tableName },
                        ts_ms: Date.now(),
                        transaction: null,
                    });
                }
                catch (err) {
                    this.logger.error(`Erro no afterDestroy do bypass para ${modelName}: ${err.message}`);
                }
            });
        }
        arc_island_model_1.ArcIsland.addHook('afterBulkDestroy', async (options) => {
            if (options.where) {
                this.logger.log(`[Bypass CDC] afterBulkDestroy em ArcIsland com cláusula where`);
                try {
                    await this.arcIslandReadModel.destroy({ where: options.where });
                }
                catch (err) {
                    this.logger.error(`Erro no afterBulkDestroy do bypass para ArcIsland: ${err.message}`);
                }
            }
        });
        arc_character_version_model_1.ArcCharacterVersion.addHook('afterBulkDestroy', async (options) => {
            if (options.where) {
                this.logger.log(`[Bypass CDC] afterBulkDestroy em ArcCharacterVersion com cláusula where`);
                try {
                    await this.arcCharacterVersionReadModel.destroy({ where: options.where });
                }
                catch (err) {
                    this.logger.error(`Erro no afterBulkDestroy do bypass para ArcCharacterVersion: ${err.message}`);
                }
            }
        });
        event_participant_model_1.EventParticipant.addHook('afterBulkDestroy', async (options) => {
            if (options.where) {
                this.logger.log(`[Bypass CDC] afterBulkDestroy em EventParticipant com cláusula where`);
                try {
                    await this.eventParticipantReadModel.destroy({ where: options.where });
                }
                catch (err) {
                    this.logger.error(`Erro no afterBulkDestroy do bypass para EventParticipant: ${err.message}`);
                }
            }
        });
    }
};
exports.CdcBypassService = CdcBypassService;
exports.CdcBypassService = CdcBypassService = CdcBypassService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, sequelize_1.InjectModel)(arc_island_read_model_1.ArcIslandRead, 'read-db')),
    __param(2, (0, sequelize_1.InjectModel)(arc_character_version_read_model_1.ArcCharacterVersionRead, 'read-db')),
    __param(3, (0, sequelize_1.InjectModel)(event_participant_read_model_1.EventParticipantRead, 'read-db')),
    __metadata("design:paramtypes", [cdc_service_1.CdcService, Object, Object, Object])
], CdcBypassService);
//# sourceMappingURL=cdc-bypass.service.js.map