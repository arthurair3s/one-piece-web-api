export declare class UpdateSagaCommand {
    readonly id: number;
    readonly name?: string | undefined;
    readonly order?: number | undefined;
    readonly description?: string | undefined;
    constructor(id: number, name?: string | undefined, order?: number | undefined, description?: string | undefined);
}
