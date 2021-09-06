import type FaIcon from "gold/lib/fa-icon";
import Page from "gold/lib/page";
import type PageManager from "gold/lib/page-manager";
import type { SvelteComponent } from "svelte";
import type { Writable } from "svelte/store";
import type Form from "./form";
export default class FormPage extends Page {
    form: Form;
    constructor(form: Form);
    get id(): string;
    get $title(): Writable<string>;
    get $icon(): Writable<FaIcon>;
    get $isChanged(): Writable<boolean>;
    get component(): typeof SvelteComponent;
    attached(pageManager: PageManager): void;
}
//# sourceMappingURL=form-page.d.ts.map