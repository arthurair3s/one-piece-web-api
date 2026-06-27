export declare class GetIslandsQuery {
    readonly page: number;
    readonly limit: number;
    readonly arc_id?: number | undefined;
    readonly is_active?: boolean | undefined;
    constructor(page: number, limit: number, arc_id?: number | undefined, is_active?: boolean | undefined);
}
