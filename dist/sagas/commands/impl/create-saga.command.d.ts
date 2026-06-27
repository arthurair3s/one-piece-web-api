export declare class CreateSagaCommand {
    readonly name: string;
    readonly order: number;
    readonly description?: string | undefined;
    constructor(name: string, order: number, description?: string | undefined);
}
