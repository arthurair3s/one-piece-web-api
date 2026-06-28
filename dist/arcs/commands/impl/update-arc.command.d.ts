export declare class UpdateArcCommand {
    readonly id: number;
    readonly name?: string | undefined;
    readonly description?: string | undefined;
    readonly saga_id?: number | undefined;
    readonly order?: number | undefined;
    constructor(id: number, name?: string | undefined, description?: string | undefined, saga_id?: number | undefined, order?: number | undefined);
}
