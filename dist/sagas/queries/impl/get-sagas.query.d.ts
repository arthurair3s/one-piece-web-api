export declare class GetSagasQuery {
    readonly page: number;
    readonly limit: number;
    readonly name?: string | undefined;
    readonly order?: number | undefined;
    constructor(page: number, limit: number, name?: string | undefined, order?: number | undefined);
}
