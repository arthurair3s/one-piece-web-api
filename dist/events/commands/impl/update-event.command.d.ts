export declare class UpdateEventCommand {
    readonly id: number;
    readonly arcIslandId?: number | undefined;
    readonly title?: string | undefined;
    readonly type?: string | undefined;
    readonly description?: string | undefined;
    readonly order?: number | undefined;
    constructor(id: number, arcIslandId?: number | undefined, title?: string | undefined, type?: string | undefined, description?: string | undefined, order?: number | undefined);
}
