import type { IFormApi } from "../interfaces";
import FaIcon from "gold/lib/fa-icon";
import type Page from "gold/lib/page";
import type { Writable } from "svelte/store";
import type List from "../list/list";
import FormButton from "./form-button";
import FormSection from "./form-section";
export default abstract class Form {
    static buttons: Array<{
        icon: FaIcon;
        action: (form: Form) => void;
        onlyIfExists: boolean;
    }>;
    static icon: FaIcon;
    static api: IFormApi;
    static list: (() => typeof List | Array<typeof List>) | null;
    list: typeof List | Array<typeof List> | null;
    api: IFormApi | null;
    buttons: Array<FormButton>;
    constructor(id?: number | string | null);
    abstract build(): void;
    sections: Array<FormSection>;
    page: Page | null;
    $icon: Writable<FaIcon>;
    $id: Writable<number | null>;
    $title: Writable<string>;
    $isChanged: Writable<boolean>;
    $item: Writable<any>;
    set title(title: string);
    set icon(icon: FaIcon);
    set id(id: number | null);
    get id(): number | null;
    set changed(state: boolean);
    $errors: Writable<Array<any>>;
    set errors(errors: Array<any> | null);
    get pageId(): string;
    set loading(loading: boolean);
    addButton(button: FormButton): void;
    addSection(title?: string | null, icon?: FaIcon | null, sizes?: Array<string>): FormSection;
    setTitle(item: any): void;
    attached(page: Page): Promise<void>;
    loadItem(): Promise<any>;
    saveItem(): Promise<any>;
    deleteItem(): Promise<boolean>;
    protected reloadList(): void;
}
export declare function form(icon: FaIcon, api: IFormApi, list?: (() => typeof List | Array<typeof List>) | null): (constructor: typeof Form) => void;
export declare function button(icon: FaIcon | {
    icon: FaIcon;
    action: (form: Form) => void;
    onlyIfExists: boolean;
}, action?: ((form: Form) => void) | null, onlyIfExists?: boolean): (constructor: typeof Form) => void;
export declare let buttons: Record<"save" | "reload" | "delete", {
    icon: FaIcon;
    action: (form: Form) => void;
    onlyIfExists: boolean;
}>;
//# sourceMappingURL=form.d.ts.map