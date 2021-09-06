import type { IFormApi } from "../interfaces";
export default class Api implements IFormApi {
    private apiBase;
    constructor(apiBase: string);
    get(id: number): Promise<any>;
    blank(): Promise<any>;
    create(item: any): Promise<false | null | number>;
    update(item: any): Promise<false | null | number>;
    delete(id: number): Promise<boolean>;
}
//# sourceMappingURL=api.d.ts.map