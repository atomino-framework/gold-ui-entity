var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import AbstractInput, { component, layout } from "../abstract-input";
import CCheckboxes from "../../../components/form/input/checkboxes.svelte";
let CheckboxesInput = class CheckboxesInput extends AbstractInput {
    constructor() {
        super(...arguments);
        this.options = [];
    }
    Options(options) {
        this.options = options;
        return this;
    }
};
CheckboxesInput = __decorate([
    component(CCheckboxes),
    layout("row")
], CheckboxesInput);
export default CheckboxesInput;
//# sourceMappingURL=checkboxes.js.map