var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import AbstractInput, { component, layout } from "../abstract-input";
import CNumber from "../../../components/form/input/number.svelte";
let NumberInput = class NumberInput extends AbstractInput {
    constructor() {
        super(...arguments);
        this.min = 0;
        this.max = null;
        this.step = 1;
    }
    Step(step) {
        this.step = step;
        return this;
    }
    Min(min = 0) {
        this.min = min;
        return this;
    }
    Max(max = 0) {
        this.max = max;
        return this;
    }
};
NumberInput = __decorate([
    component(CNumber),
    layout("row")
], NumberInput);
export default NumberInput;
//# sourceMappingURL=number.js.map