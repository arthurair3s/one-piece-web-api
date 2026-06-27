export declare class CreateArcCommand {
    readonly name: string;
    readonly description: string;
    readonly saga_id: number;
    readonly order: number;
    constructor(name: string, description: string, saga_id: number, order: number);
}
