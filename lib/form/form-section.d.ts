import type AbstractInput from "./abstract-input";
import type FaIcon from "gold/lib/fa-icon";
export default class FormSection {
    title: string | null;
    icon: FaIcon | null;
    sizes: Array<string>;
    controls: Array<AbstractInput>;
    role: Array<string> | null;
    constructor(title?: string | null, icon?: FaIcon | null, sizes?: Array<string>);
    addControl(control: AbstractInput): this;
    setRole(role: string | Array<string>): this;
}
//# sourceMappingURL=form-section.d.ts.map