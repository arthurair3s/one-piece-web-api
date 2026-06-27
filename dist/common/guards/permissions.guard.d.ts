import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { QueryBus } from '@nestjs/cqrs';
export declare class PermissionsGuard implements CanActivate {
    private reflector;
    private queryBus;
    constructor(reflector: Reflector, queryBus: QueryBus);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
