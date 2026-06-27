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
exports.PermissionsService = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const create_permission_command_1 = require("./commands/impl/create-permission.command");
const update_permission_command_1 = require("./commands/impl/update-permission.command");
const delete_permission_command_1 = require("./commands/impl/delete-permission.command");
const get_permissions_query_1 = require("./queries/impl/get-permissions.query");
const get_permission_by_id_query_1 = require("./queries/impl/get-permission-by-id.query");
let PermissionsService = class PermissionsService {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    create(data) {
        return this.commandBus.execute(new create_permission_command_1.CreatePermissionCommand(data));
    }
    findAll(filters) {
        return this.queryBus.execute(new get_permissions_query_1.GetPermissionsQuery(filters));
    }
    findOne(id) {
        return this.queryBus.execute(new get_permission_by_id_query_1.GetPermissionByIdQuery(id));
    }
    update(id, data) {
        return this.commandBus.execute(new update_permission_command_1.UpdatePermissionCommand(id, data));
    }
    remove(id) {
        return this.commandBus.execute(new delete_permission_command_1.DeletePermissionCommand(id));
    }
};
exports.PermissionsService = PermissionsService;
exports.PermissionsService = PermissionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], PermissionsService);
//# sourceMappingURL=permissions.service.js.map