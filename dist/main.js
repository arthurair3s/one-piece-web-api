"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const microservices_1 = require("@nestjs/microservices");
const all_exceptions_filter_1 = require("./common/filters/all-exceptions.filter");
const sequelize_typescript_1 = require("sequelize-typescript");
require("reflect-metadata");
async function bootstrap() {
    const logger = new common_1.Logger('Bootstrap');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.setGlobalPrefix('api');
    app.useGlobalFilters(new all_exceptions_filter_1.AllExceptionsFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Grand Line API')
        .setDescription('Documentação da API')
        .setVersion('1.0')
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'access-token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document, {
        swaggerOptions: {
            docExpansion: 'none',
        },
    });
    if (process.env.BYPASS_CDC !== 'true') {
        const kafkaBrokers = (process.env.KAFKA_BROKERS ?? 'kafka:29092').split(',');
        app.connectMicroservice({
            transport: microservices_1.Transport.KAFKA,
            options: {
                client: {
                    brokers: kafkaBrokers,
                },
                consumer: {
                    groupId: 'nestjs-cdc-consumer-v3',
                },
                subscribe: {
                    fromBeginning: true,
                },
            },
        });
        await app.startAllMicroservices();
    }
    else {
        logger.log('Bypass de CDC ativo. Pulando inicialização do microservice Kafka.');
    }
    if (process.env.BYPASS_CDC === 'true') {
        const sequelize = app.get(sequelize_typescript_1.Sequelize);
        const syncLogger = new common_1.Logger('SyncReadModel');
        syncLogger.log('Bypass de CDC ativo. Sincronizando Read Model com o Write Model no banco...');
        try {
            await sequelize.query(`
        INSERT INTO read_model.sagas (id, name, description, "order", "createdAt", "updatedAt", "deletedAt")
        SELECT id, name, description, "order", "createdAt", "updatedAt", "deletedAt"
        FROM public.sagas
        ON CONFLICT (id) DO UPDATE SET
          name = EXCLUDED.name,
          description = EXCLUDED.description,
          "order" = EXCLUDED."order",
          "createdAt" = EXCLUDED."createdAt",
          "updatedAt" = EXCLUDED."updatedAt",
          "deletedAt" = EXCLUDED."deletedAt";
      `);
            await sequelize.query(`
        INSERT INTO read_model.arcs (id, name, description, saga_id, "order", "createdAt", "updatedAt", "deletedAt")
        SELECT id, name, description, saga_id, "order", "createdAt", "updatedAt", "deletedAt"
        FROM public.arcs
        ON CONFLICT (id) DO UPDATE SET
          name = EXCLUDED.name,
          description = EXCLUDED.description,
          saga_id = EXCLUDED.saga_id,
          "order" = EXCLUDED."order",
          "createdAt" = EXCLUDED."createdAt",
          "updatedAt" = EXCLUDED."updatedAt",
          "deletedAt" = EXCLUDED."deletedAt";
      `);
            await sequelize.query(`
        INSERT INTO read_model.islands (id, name, description, coordinate_x, coordinate_y, coordinate_z, rotation_y, scale, model_url, thumbnail_url, is_active, "createdAt", "updatedAt", "deletedAt")
        SELECT id, name, description, coordinate_x, coordinate_y, coordinate_z, rotation_y, scale, model_url, thumbnail_url, is_active, "createdAt", "updatedAt", "deletedAt"
        FROM public.islands
        ON CONFLICT (id) DO UPDATE SET
          name = EXCLUDED.name,
          description = EXCLUDED.description,
          coordinate_x = EXCLUDED.coordinate_x,
          coordinate_y = EXCLUDED.coordinate_y,
          coordinate_z = EXCLUDED.coordinate_z,
          rotation_y = EXCLUDED.rotation_y,
          scale = EXCLUDED.scale,
          model_url = EXCLUDED.model_url,
          thumbnail_url = EXCLUDED.thumbnail_url,
          is_active = EXCLUDED.is_active,
          "createdAt" = EXCLUDED."createdAt",
          "updatedAt" = EXCLUDED."updatedAt",
          "deletedAt" = EXCLUDED."deletedAt";
      `);
            await sequelize.query(`
        INSERT INTO read_model.arc_islands (id, arc_id, island_id, "order", "createdAt", "updatedAt", "deletedAt")
        SELECT id, arc_id, island_id, "order", "createdAt", "updatedAt", "deletedAt"
        FROM public.arc_islands
        ON CONFLICT (id) DO UPDATE SET
          arc_id = EXCLUDED.arc_id,
          island_id = EXCLUDED.island_id,
          "order" = EXCLUDED."order",
          "createdAt" = EXCLUDED."createdAt",
          "updatedAt" = EXCLUDED."updatedAt",
          "deletedAt" = EXCLUDED."deletedAt";
      `);
            await sequelize.query(`
        INSERT INTO read_model.character_reads (id, name, slug, "createdAt", "updatedAt", "deletedAt")
        SELECT id, name, slug, "createdAt", "updatedAt", "deletedAt"
        FROM public.characters
        ON CONFLICT (id) DO UPDATE SET
          name = EXCLUDED.name,
          slug = EXCLUDED.slug,
          "createdAt" = EXCLUDED."createdAt",
          "updatedAt" = EXCLUDED."updatedAt",
          "deletedAt" = EXCLUDED."deletedAt";
      `);
            await sequelize.query(`
        INSERT INTO read_model.character_versions (id, character_id, alias, epithet, bounty, status, image_url, description, "createdAt", "updatedAt", "deletedAt")
        SELECT id, character_id, alias, epithet, bounty, status, image_url, description, "createdAt", "updatedAt", "deletedAt"
        FROM public.character_versions
        ON CONFLICT (id) DO UPDATE SET
          character_id = EXCLUDED.character_id,
          alias = EXCLUDED.alias,
          epithet = EXCLUDED.epithet,
          bounty = EXCLUDED.bounty,
          status = EXCLUDED.status,
          image_url = EXCLUDED.image_url,
          description = EXCLUDED.description,
          "createdAt" = EXCLUDED."createdAt",
          "updatedAt" = EXCLUDED."updatedAt",
          "deletedAt" = EXCLUDED."deletedAt";
      `);
            await sequelize.query(`
        INSERT INTO read_model.arc_character_versions (id, arc_id, character_version_id, character_id, "order", "createdAt", "updatedAt", "deletedAt")
        SELECT id, arc_id, character_version_id, character_id, "order", "createdAt", "updatedAt", "deletedAt"
        FROM public.arc_character_versions
        ON CONFLICT (id) DO UPDATE SET
          arc_id = EXCLUDED.arc_id,
          character_version_id = EXCLUDED.character_version_id,
          character_id = EXCLUDED.character_id,
          "order" = EXCLUDED."order",
          "createdAt" = EXCLUDED."createdAt",
          "updatedAt" = EXCLUDED."updatedAt",
          "deletedAt" = EXCLUDED."deletedAt";
      `);
            await sequelize.query(`
        INSERT INTO read_model.events (id, arc_island_id, title, description, type, "order", "createdAt", "updatedAt", "deletedAt")
        SELECT id, arc_island_id, title, description, type, "order", "createdAt", "updatedAt", "deletedAt"
        FROM public.events
        ON CONFLICT (id) DO UPDATE SET
          arc_island_id = EXCLUDED.arc_island_id,
          title = EXCLUDED.title,
          description = EXCLUDED.description,
          type = EXCLUDED.type,
          "order" = EXCLUDED."order",
          "createdAt" = EXCLUDED."createdAt",
          "updatedAt" = EXCLUDED."updatedAt",
          "deletedAt" = EXCLUDED."deletedAt";
      `);
            await sequelize.query(`
        INSERT INTO read_model.event_participants (id, event_id, character_version_id, "createdAt", "updatedAt", "deletedAt")
        SELECT id, event_id, character_version_id, "createdAt", "updatedAt", "deletedAt"
        FROM public.event_participants
        ON CONFLICT (id) DO UPDATE SET
          event_id = EXCLUDED.event_id,
          character_version_id = EXCLUDED.character_version_id,
          "createdAt" = EXCLUDED."createdAt",
          "updatedAt" = EXCLUDED."updatedAt",
          "deletedAt" = EXCLUDED."deletedAt";
      `);
            syncLogger.log('Sincronização do Read Model concluída com sucesso!');
        }
        catch (e) {
            syncLogger.error('Erro na sincronização automática do Read Model: ' + e.message, e.stack);
        }
    }
    const port = process.env.PORT ?? 3000;
    await app.listen(port);
    logger.log(`Grand Line API is running on: http://localhost:${port}/api`);
}
bootstrap();
//# sourceMappingURL=main.js.map