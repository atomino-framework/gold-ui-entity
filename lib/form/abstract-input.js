export default class AbstractInput {
    constructor(field, label = null) {
        this.field = field;
        this.label = label;
        this.layout = "column";
        this.hint = null;
        this.role = null;
        this.label = this.label !== null ? this.label : this.field.toString();
        this.layout = this.constructor.layout;
    }
    get component() { return this.constructor.component; }
    Hint(hint) {
        this.hint = hint;
        return this;
    }
    Layout(layout) {
        this.layout = layout;
        return this;
    }
    Role(role) {
        this.role = typeof role === "string" ? [role] : role;
        return this;
    }
}
AbstractInput.layout = "column";
export function component(component) {
    return function (constructor) {
        constructor.component = component;
    };
}
export function layout(layout) {
    return function (constructor) {
        constructor.layout = layout;
    };
}
//# sourceMappingURL=abstract-input.js.map