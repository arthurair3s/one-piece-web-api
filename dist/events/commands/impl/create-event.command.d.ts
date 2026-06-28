export declare class CreateEventCommand {
    readonly arcIslandId: number;
    readonly title: string;
    readonly type: string;
    readonly description: string | undefined;
    readonly order: number;
    constructor(arcIslandId: number, title: string, type: string, description: string | undefined, order: number);
}
