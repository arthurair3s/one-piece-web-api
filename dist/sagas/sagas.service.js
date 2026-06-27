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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SagasService = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const create_saga_command_1 = require("./commands/impl/create-saga.command");
const create_sagas_bulk_command_1 = require("./commands/impl/create-sagas-bulk.command");
const update_saga_command_1 = require("./commands/impl/update-saga.command");
const delete_saga_command_1 = require("./commands/impl/delete-saga.command");
const get_sagas_query_1 = require("./queries/impl/get-sagas.query");
const get_saga_by_id_query_1 = require("./queries/impl/get-saga-by-id.query");
let SagasService = class SagasService {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async create(dto) {
        return this.commandBus.execute(new create_saga_command_1.CreateSagaCommand(dto.name, dto.order, dto.description));
    }
    async createBulk(dtos) {
        return this.commandBus.execute(new create_sagas_bulk_command_1.CreateSagasBulkCommand(dtos));
    }
    async findAll(query) {
        return this.queryBus.execute(new get_sagas_query_1.GetSagasQuery(query.page, query.limit, query.name, query.order));
    }
    async findOne(id) {
        return this.queryBus.execute(new get_saga_by_id_query_1.GetSagaByIdQuery(id));
    }
    async update(id, dto) {
        return this.commandBus.execute(new update_saga_command_1.UpdateSagaCommand(id, dto.name, dto.order, dto.description));
    }
    async remove(id) {
        return this.commandBus.execute(new delete_saga_command_1.DeleteSagaCommand(id));
    }
};
exports.SagasService = SagasService;
exports.SagasService = SagasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], SagasService);
//# sourceMappingURL=sagas.service.js.map