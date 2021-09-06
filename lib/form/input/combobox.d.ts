import AbstractInput from "../abstract-input";
import type Form from "../form";
export interface IApi {
    search(search: string): Promise<Array<IResult>>;
    get(value: Array<number> | number): Promise<Array<IResult>>;
}
export interface IResult {
    value: string;
    id: number;
}
export declare class SelectorApi implements IApi {
    protected getUrl: string;
    protected searchUrl: string;
    static factory(urlBase: string): IApi;
    constructor(getUrl: string, searchUrl: string);
    get(value: Array<number> | number): Promise<Array<IResult>>;
    search(search: string): Promise<Array<IResult>>;
}
export default class ComboboxInput extends AbstractInput {
    api: IApi | null;
    multi: boolean | number;
    form: typeof Form | null;
    minChar: number;
    MinChar(minChar: number): this;
    Api(api: IApi | string): this;
    Form(form: typeof Form): this;
    Multi(amount?: true | number): this;
}
//# sourceMappingURL=combobox.d.ts.map