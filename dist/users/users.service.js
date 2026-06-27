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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const create_user_command_1 = require("./commands/impl/create-user.command");
const get_users_query_1 = require("./queries/impl/get-users.query");
const update_user_command_1 = require("./commands/impl/update-user.command");
const delete_user_command_1 = require("./commands/impl/delete-user.command");
const get_user_by_id_query_1 = require("./queries/impl/get-user-by-id.query");
let UsersService = class UsersService {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    create(data) {
        return this.commandBus.execute(new create_user_command_1.CreateUserCommand(data));
    }
    findAll(filters) {
        return this.queryBus.execute(new get_users_query_1.GetUsersQuery(filters));
    }
    findOne(id) {
        return this.queryBus.execute(new get_user_by_id_query_1.GetUserByIdQuery(id));
    }
    update(id, data) {
        return this.commandBus.execute(new update_user_command_1.UpdateUserCommand(id, data));
    }
    remove(id) {
        return this.commandBus.execute(new delete_user_command_1.DeleteUserCommand(id));
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], UsersService);
//# sourceMappingURL=users.service.js.map