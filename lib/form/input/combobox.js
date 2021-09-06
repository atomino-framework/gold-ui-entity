var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import AbstractInput, { component, layout } from "../abstract-input";
import CCombobox from "../../../components/form/input/combobox.svelte";
export class SelectorApi {
    constructor(getUrl, searchUrl) {
        this.getUrl = getUrl;
        this.searchUrl = searchUrl;
    }
    static factory(urlBase) {
        return new this(urlBase + '/select/get', urlBase + '/select/search');
    }
    async get(value) {
        if (typeof value === "number")
            value = [value];
        let result = await fetch(this.getUrl, { method: "POST", body: JSON.stringify({ value }) });
        return await result.json();
    }
    async search(search) {
        let result = await fetch(this.searchUrl, { method: "POST", body: JSON.stringify({ search }) });
        return await result.json();
    }
}
let ComboboxInput = class ComboboxInput extends AbstractInput {
    constructor() {
        super(...arguments);
        this.api = null;
        this.multi = false;
        this.form = null;
        this.minChar = 3;
    }
    MinChar(minChar) {
        this.minChar = minChar;
        return this;
    }
    Api(api) {
        if (typeof api === "string")
            api = SelectorApi.factory(api);
        this.api = api;
        return this;
    }
    Form(form) {
        this.form = form;
        return this;
    }
    Multi(amount = true) {
        this.multi = amount;
        return this;
    }
};
ComboboxInput = __decorate([
    component(CCombobox),
    layout("row")
], ComboboxInput);
export default ComboboxInput;
//# sourceMappingURL=combobox.js.map