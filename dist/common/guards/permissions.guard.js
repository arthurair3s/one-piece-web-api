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
exports.PermissionsGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const cqrs_1 = require("@nestjs/cqrs");
const require_permissions_decorator_1 = require("../decorators/require-permissions.decorator");
const get_user_by_id_query_1 = require("../../users/queries/impl/get-user-by-id.query");
let PermissionsGuard = class PermissionsGuard {
    constructor(reflector, queryBus) {
        this.reflector = reflector;
        this.queryBus = queryBus;
    }
    async canActivate(context) {
        if (process.env.IGNORE_PERMISSIONS === 'true') {
            return true;
        }
        const requiredPermissions = this.reflector.getAllAndOverride(require_permissions_decorator_1.PERMISSIONS_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredPermissions) {
            return true;
        }
        const { user } = context.switchToHttp().getRequest();
        if (!user) {
            return false;
        }
        const fullUser = await this.queryBus.execute(new get_user_by_id_query_1.GetUserByIdQuery(user.id));
        const userPermissions = fullUser.profile?.permissions?.map((p) => p.slug) || [];
        const hasPermission = requiredPermissions.every((permission) => userPermissions.includes(permission));
        if (!hasPermission) {
            throw new common_1.ForbiddenException('Acesso negado: você não possui as permissões necessárias.');
        }
        return true;
    }
};
exports.PermissionsGuard = PermissionsGuard;
exports.PermissionsGuard = PermissionsGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        cqrs_1.QueryBus])
], PermissionsGuard);
//# sourceMappingURL=permissions.guard.js.map