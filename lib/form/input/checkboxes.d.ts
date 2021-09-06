import AbstractInput from "../abstract-input";
interface IOption {
    label: string;
    value: any;
}
export default class CheckboxesInput extends AbstractInput {
    options: Array<IOption>;
    Options(options: Array<IOption>): this;
}
export {};
//# sourceMappingURL=checkboxes.d.ts.map