import FaIcon from "gold/lib/fa-icon";
import GoldList from "gold/lib/list";
import type ListManager from "gold/lib/list-manager";
import type { SvelteComponent } from "svelte";
import { Writable } from "svelte/store";
import type Form from "../form/form";
import type { IListApi, IListOptions } from "../interfaces";
import ListButton from "./list-button";
export default abstract class List extends GoldList {
    cardifyItem(item: any): any;
    constructor();
    static get id(): string;
    static icon: FaIcon;
    static title: string;
    static api: IListApi;
    static form: () => typeof Form;
    static buttons: Array<{
        icon: FaIcon;
        action: (list: List) => void;
    }>;
    get id(): string;
    options: IListOptions;
    $items: Writable<Array<any>>;
    $count: Writable<number>;
    $page: Writable<number>;
    view: string | null;
    sorting: string | null;
    quicksearch: string;
    filter: any;
    buttons: Array<ListButton>;
    get icon(): FaIcon;
    get title(): string;
    get api(): IListApi;
    get form(): typeof Form;
    get component(): typeof SvelteComponent;
    get card(): typeof SvelteComponent;
    addButton(button: ListButton): void;
    open(item: any): void;
    attached(listManager: ListManager): Promise<any>;
    setOptions(): Promise<any>;
    reload(): Promise<void>;
    addNew(): void;
}
export declare let buttons: Record<"new", {
    icon: FaIcon;
    action: (form: List) => void;
}>;
export declare function button(icon: FaIcon | {
    icon: FaIcon;
    action: (list: List) => void;
}, action?: ((list: List) => void) | null): (constructor: typeof List) => void;
export declare function list(title: string, icon: FaIcon, api: IListApi, form: () => typeof Form): (constructor: typeof List) => void;
//# sourceMappingURL=list.d.ts.map