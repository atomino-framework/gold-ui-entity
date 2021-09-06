import AbstractInput from "../abstract-input";
export default class NumberInput extends AbstractInput {
    min: number | null;
    max: number | null;
    step: number;
    Step(step: number): this;
    Min(min?: number): this;
    Max(max?: number): this;
}
//# sourceMappingURL=number.d.ts.map