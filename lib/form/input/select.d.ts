import AbstractInput from "../abstract-input";
interface IOption {
    label: string;
    value: any;
}
export default class SelectInput extends AbstractInput {
    options: Array<IOption>;
    Options(options: Array<IOption>): this;
}
export {};
//# sourceMappingURL=select.d.ts.map