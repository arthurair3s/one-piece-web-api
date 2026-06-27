import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CdcService } from './cdc.service';

// Modelos de Escrita (para hooks)
import { Saga } from '../sagas/models/saga.model';
import { Island } from '../islands/models/island.model';
import { Arc } from '../arcs/models/arc.model';
import { ArcIsland } from '../arcs/models/arc-island.model';
import { Character } from '../characters/models/character.model';
import { CharacterVersion } from '../character-versions/models/character-version.model';
import { ArcCharacterVersion } from '../arcs/models/arc-character-version.model';
import { Event } from '../events/models/event.model';
import { EventParticipant } from '../events/models/event-participant.model';

// Modelos de Leitura (para bulk deletion)
import { ArcIslandRead } from '../arcs/models/arc-island-read.model';
import { ArcCharacterVersionRead } from '../arcs/models/arc-character-version-read.model';
import { EventParticipantRead } from '../events/models/event-participant-read.model';

@Injectable()
export class CdcBypassService implements OnModuleInit {
  private readonly logger = new Logger(CdcBypassService.name);

  constructor(
    private readonly cdcService: CdcService,
    @InjectModel(ArcIslandRead, 'read-db')
    private readonly arcIslandReadModel: typeof ArcIslandRead,
    @InjectModel(ArcCharacterVersionRead, 'read-db')
    private readonly arcCharacterVersionReadModel: typeof ArcCharacterVersionRead,
    @InjectModel(EventParticipantRead, 'read-db')
    private readonly eventParticipantReadModel: typeof EventParticipantRead,
  ) {}

  onModuleInit() {
    if (process.env.BYPASS_CDC !== 'true') {
      this.logger.log('Bypass de CDC inativo (modo de produção desativado ou executando localmente com Kafka).');
      return;
    }

    this.logger.log('⚠️ BYPASS_CDC ativo! Registrando hooks do Sequelize para replicação direta...');

    const modelsToBypass = [
      { model: Saga as any, cdcMethod: 'processSagaChange' as const },
      { model: Island as any, cdcMethod: 'processIslandChange' as const },
      { model: Arc as any, cdcMethod: 'processArcChange' as const },
      { model: ArcIsland as any, cdcMethod: 'processArcIslandChange' as const },
      { model: Character as any, cdcMethod: 'processCharacterChange' as const },
      { model: CharacterVersion as any, cdcMethod: 'processCharacterVersionChange' as const },
      { model: ArcCharacterVersion as any, cdcMethod: 'processArcCharacterVersionChange' as const },
      { model: Event as any, cdcMethod: 'processEventChange' as const },
      { model: EventParticipant as any, cdcMethod: 'processEventParticipantChange' as const },
    ];

    for (const entry of modelsToBypass) {
      const model = entry.model;
      const modelName = model.name;

      model.addHook('afterCreate', async (instance: any) => {
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
        } catch (err: any) {
          this.logger.error(`Erro no afterCreate do bypass para ${modelName}: ${err.message}`);
        }
      });

      model.addHook('afterUpdate', async (instance: any) => {
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
        } catch (err: any) {
          this.logger.error(`Erro no afterUpdate do bypass para ${modelName}: ${err.message}`);
        }
      });

      model.addHook('afterDestroy', async (instance: any) => {
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
        } catch (err: any) {
          this.logger.error(`Erro no afterDestroy do bypass para ${modelName}: ${err.message}`);
        }
      });
    }

    // Registra Hooks de Bulk Destroy específicos para as tabelas de associação/pivô
    ArcIsland.addHook('afterBulkDestroy', async (options: any) => {
      if (options.where) {
        this.logger.log(`[Bypass CDC] afterBulkDestroy em ArcIsland com cláusula where`);
        try {
          await this.arcIslandReadModel.destroy({ where: options.where });
        } catch (err: any) {
          this.logger.error(`Erro no afterBulkDestroy do bypass para ArcIsland: ${err.message}`);
        }
      }
    });

    ArcCharacterVersion.addHook('afterBulkDestroy', async (options: any) => {
      if (options.where) {
        this.logger.log(`[Bypass CDC] afterBulkDestroy em ArcCharacterVersion com cláusula where`);
        try {
          await this.arcCharacterVersionReadModel.destroy({ where: options.where });
        } catch (err: any) {
          this.logger.error(`Erro no afterBulkDestroy do bypass para ArcCharacterVersion: ${err.message}`);
        }
      }
    });

    EventParticipant.addHook('afterBulkDestroy', async (options: any) => {
      if (options.where) {
        this.logger.log(`[Bypass CDC] afterBulkDestroy em EventParticipant com cláusula where`);
        try {
          await this.eventParticipantReadModel.destroy({ where: options.where });
        } catch (err: any) {
          this.logger.error(`Erro no afterBulkDestroy do bypass para EventParticipant: ${err.message}`);
        }
      }
    });
  }
}
