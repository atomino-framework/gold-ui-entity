import AbstractInput from "../abstract-input";
interface IOption {
    label: string;
    value: any;
}
export default class RadioInput extends AbstractInput {
    options: Array<IOption>;
    Options(options: Array<IOption>): this;
}
export {};
//# sourceMappingURL=radio.d.ts.map