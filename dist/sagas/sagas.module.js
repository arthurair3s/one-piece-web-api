"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SagasModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const saga_model_1 = require("./models/saga.model");
const saga_read_model_1 = require("./models/saga-read.model");
const arc_model_1 = require("../arcs/models/arc.model");
const sagas_controller_1 = require("./sagas.controller");
const sagas_service_1 = require("./sagas.service");
const get_sagas_handler_1 = require("./queries/handlers/get-sagas.handler");
const get_saga_by_id_handler_1 = require("./queries/handlers/get-saga-by-id.handler");
const create_saga_handler_1 = require("./commands/handlers/create-saga.handler");
const create_sagas_bulk_handler_1 = require("./commands/handlers/create-sagas-bulk.handler");
const update_saga_handler_1 = require("./commands/handlers/update-saga.handler");
const delete_saga_handler_1 = require("./commands/handlers/delete-saga.handler");
const CommandHandlers = [
    create_saga_handler_1.CreateSagaHandler,
    create_sagas_bulk_handler_1.CreateSagasBulkHandler,
    update_saga_handler_1.UpdateSagaHandler,
    delete_saga_handler_1.DeleteSagaHandler,
];
const QueryHandlers = [
    get_sagas_handler_1.GetSagasHandler,
    get_saga_by_id_handler_1.GetSagaByIdHandler,
];
let SagasModule = class SagasModule {
};
exports.SagasModule = SagasModule;
exports.SagasModule = SagasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            sequelize_1.SequelizeModule.forFeature([saga_model_1.Saga, arc_model_1.Arc]),
            sequelize_1.SequelizeModule.forFeature([saga_read_model_1.SagaRead], 'read-db'),
        ],
        controllers: [sagas_controller_1.SagasController],
        providers: [sagas_service_1.SagasService,
            ...CommandHandlers,
            ...QueryHandlers,
        ],
        exports: [sagas_service_1.SagasService],
    })
], SagasModule);
//# sourceMappingURL=sagas.module.js.map