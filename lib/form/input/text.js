var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import AbstractInput, { component, layout } from "../abstract-input";
import CText from "../../../components/form/input/text.svelte";
let TextInput = class TextInput extends AbstractInput {
    constructor() {
        super(...arguments);
        this.code = false;
        this.markdown = false;
    }
    Code() {
        this.code = true;
        return this;
    }
    Markdown() {
        this.code = true;
        this.markdown = true;
        return this;
    }
};
TextInput = __decorate([
    component(CText),
    layout("column")
], TextInput);
export default TextInput;
//# sourceMappingURL=text.js.map