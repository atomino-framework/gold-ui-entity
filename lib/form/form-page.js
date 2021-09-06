import Page from "gold/lib/page";
import CFormPage from "../../components/form/form-page.svelte";
export default class FormPage extends Page {
    constructor(form) {
        super();
        this.form = form;
    }
    get id() { return this.constructor.name + "-" + this.form.pageId; }
    get $title() { return this.form.$title; }
    get $icon() { return this.form.$icon; }
    get $isChanged() { return this.form.$isChanged; }
    get component() { return CFormPage; }
    attached(pageManager) {
        super.attached(pageManager);
        this.form.attached(this);
    }
}
//# sourceMappingURL=form-page.js.map