import type { IListApi } from "../interfaces";
export default class Api implements IListApi {
    private apiBase;
    constructor(apiBase: string);
    getOptions(): Promise<any>;
    get(pagesize: number, page: number, view: string | null, sorting: string | null, quicksearch: string, filter: any): Promise<any>;
}
//# sourceMappingURL=api.d.ts.map