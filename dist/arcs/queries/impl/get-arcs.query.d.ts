export declare class GetArcsQuery {
    readonly page: number;
    readonly limit: number;
    readonly saga_id?: number | undefined;
    readonly name?: string | undefined;
    constructor(page: number, limit: number, saga_id?: number | undefined, name?: string | undefined);
}
