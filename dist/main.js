"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const microservices_1 = require("@nestjs/microservices");
const all_exceptions_filter_1 = require("./common/filters/all-exceptions.filter");
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
    const port = process.env.PORT ?? 3000;
    await app.listen(port);
    logger.log(`Grand Line API is running on: http://localhost:${port}/api`);
}
bootstrap();
//# sourceMappingURL=main.js.map