import type { SvelteComponent } from "svelte";
export default class AbstractInput {
    field: string;
    label: string | null;
    static component: typeof SvelteComponent;
    static layout: "column" | "row";
    layout: "column" | "row";
    hint: string | null;
    role: Array<string> | null;
    constructor(field: string, label?: string | null);
    get component(): typeof SvelteComponent;
    Hint(hint: string): this;
    Layout(layout: "column" | "row"): this;
    Role(role: string | Array<string>): this;
}
export declare function component(component: typeof SvelteComponent): (constructor: typeof AbstractInput) => void;
export declare function layout(layout: "column" | "row"): (constructor: typeof AbstractInput) => void;
//# sourceMappingURL=abstract-input.d.ts.map