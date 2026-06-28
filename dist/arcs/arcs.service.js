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
exports.ArcsService = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const create_arc_command_1 = require("./commands/impl/create-arc.command");
const create_arcs_bulk_command_1 = require("./commands/impl/create-arcs-bulk.command");
const update_arc_command_1 = require("./commands/impl/update-arc.command");
const delete_arc_command_1 = require("./commands/impl/delete-arc.command");
const get_arcs_query_1 = require("./queries/impl/get-arcs.query");
const get_arc_by_id_query_1 = require("./queries/impl/get-arc-by-id.query");
let ArcsService = class ArcsService {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    create(dto) {
        return this.commandBus.execute(new create_arc_command_1.CreateArcCommand(dto.name, dto.description, dto.saga_id, dto.order));
    }
    createBulk(dtos) {
        return this.commandBus.execute(new create_arcs_bulk_command_1.CreateArcsBulkCommand(dtos));
    }
    findAll(query) {
        return this.queryBus.execute(new get_arcs_query_1.GetArcsQuery(query.page, query.limit, query.saga_id, query.name));
    }
    findOne(id) {
        return this.queryBus.execute(new get_arc_by_id_query_1.GetArcByIdQuery(id));
    }
    update(id, dto) {
        return this.commandBus.execute(new update_arc_command_1.UpdateArcCommand(id, dto.name, dto.description, dto.saga_id, dto.order));
    }
    remove(id) {
        return this.commandBus.execute(new delete_arc_command_1.DeleteArcCommand(id));
    }
};
exports.ArcsService = ArcsService;
exports.ArcsService = ArcsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], ArcsService);
//# sourceMappingURL=arcs.service.js.map