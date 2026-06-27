"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const config_1 = require("@nestjs/config");
const users_module_1 = require("./users/users.module");
const profiles_module_1 = require("./profiles/profiles.module");
const permissions_module_1 = require("./permissions/permissions.module");
const auth_module_1 = require("./auth/auth.module");
const characters_module_1 = require("./characters/characters.module");
const character_versions_module_1 = require("./character-versions/character-versions.module");
const arcs_module_1 = require("./arcs/arcs.module");
const sagas_module_1 = require("./sagas/sagas.module");
const islands_module_1 = require("./islands/islands.module");
const events_module_1 = require("./events/events.module");
const cdc_module_1 = require("./cdc/cdc.module");
const wiki_module_1 = require("./wiki/wiki.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, envFilePath: '../.env' }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            profiles_module_1.ProfilesModule,
            permissions_module_1.PermissionsModule,
            characters_module_1.CharactersModule,
            character_versions_module_1.CharacterVersionsModule,
            arcs_module_1.ArcsModule,
            sagas_module_1.SagasModule,
            islands_module_1.IslandsModule,
            events_module_1.EventsModule,
            cdc_module_1.CdcModule,
            wiki_module_1.WikiModule,
            sequelize_1.SequelizeModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    dialect: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: configService.get('DB_PORT', 5432),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_DATABASE'),
                    autoLoadModels: true,
                    synchronize: false,
                })
            }),
            sequelize_1.SequelizeModule.forRootAsync({
                name: 'read-db',
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    dialect: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: configService.get('DB_PORT', 5432),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_DATABASE_READ'),
                    autoLoadModels: true,
                    synchronize: true,
                }),
            }),
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map