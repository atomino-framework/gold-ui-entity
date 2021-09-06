export default class FormSection {
    constructor(title = null, icon = null, sizes = ['is-full']) {
        this.title = title;
        this.icon = icon;
        this.sizes = sizes;
        this.controls = [];
        this.role = null;
    }
    addControl(control) {
        this.controls.push(control);
        return this;
    }
    setRole(role) {
        this.role = typeof role === "string" ? [role] : role;
        return this;
    }
}
//# sourceMappingURL=form-section.js.map