import Confirm from "../../components/form/confirm.svelte";
import options from "../options";
import FaIcon from "gold/lib/fa-icon";
import { Modal } from "gold/lib/modal-manager";
import toast from "gold/lib/toast";
import { get, writable } from "svelte/store";
import FormButton from "./form-button";
import FormSection from "./form-section";
export default class Form {
    constructor(id = null) {
        this.api = null;
        this.buttons = [];
        // public $modal: Writable<{ component: typeof SvelteComponent, props: any } | null> = writable(null);
        // public openModal(component: typeof SvelteComponent, props: {} = {}) { this.$modal.set({component, props});}
        // public closeModal() { this.$modal.set(null);}
        this.sections = [];
        this.page = null;
        this.$icon = writable(FaIcon.l("star"));
        this.$id = writable(null);
        this.$title = writable('...');
        this.$isChanged = writable(false);
        this.$item = writable({});
        this.$errors = writable([]);
        if (typeof id === "string")
            id = parseInt(id);
        this.id = id;
        let list = this.constructor.list;
        this.list = list === null ? null : list();
        this.api = this.constructor.api;
        this.icon = this.constructor.icon;
        for (let button of this.constructor.buttons) {
            this.addButton(new FormButton(button.icon, () => button.action(this), button.onlyIfExists));
        }
        this.build();
    }
    set title(title) { this.$title.set(title); }
    set icon(icon) { this.$icon.set(icon); }
    set id(id) { this.$id.set(id); }
    get id() { return get(this.$id); }
    set changed(state) {
        this.$isChanged.set(state);
        this.setTitle(get(this.$item));
    }
    set errors(errors) {
        if (errors === null)
            errors = [];
        this.$errors.set(errors);
    }
    get pageId() { return 'entity-' + this.constructor.name + (get(this.$id) === null ? '' : '-' + get(this.$id)); }
    set loading(loading) { this.page && (this.page.loading = false); }
    addButton(button) { this.buttons.push(button); }
    addSection(title = null, icon = null, sizes = ["is-full"]) {
        let section = new FormSection(title, icon, sizes);
        this.sections.push(section);
        return section;
    }
    setTitle(item) { this.title = this.id === null ? "new" : this.id.toString(); }
    async attached(page) {
        this.page = page;
        await this.loadItem();
    }
    async loadItem() {
        this.page.loading = true;
        try {
            let data = await (this.id === null ? this.api.blank() : this.api.get(this.id));
            this.$item.set(data);
            this.setTitle(data);
            this.page.loading = false;
            this.changed = false;
            this.errors = null;
        }
        catch (e) {
            this.page?.pageManager?.remove(this.page);
        }
    }
    async saveItem() {
        this.page.loading = true;
        let item = get(this.$item);
        try {
            let id1 = await (this.id === null ? this.api.create(item) : this.api.update(item));
            if (typeof id1 === "number")
                this.id = id1;
            toast.success("Item saved");
            this.reloadList();
            return this.loadItem();
        }
        catch (e) {
            if (e.code === 422)
                this.errors = e.messages;
        }
        finally {
            this.page.loading = false;
        }
    }
    async deleteItem() {
        let modal = new Modal(Confirm, {
            title: "Are you sure?",
            content: "Do you really want to delete this item?",
            form: this,
            buttons: [
                {
                    label: "Cancel",
                    style: "is-primary",
                    action: () => { modal.close(); }
                },
                {
                    label: "Delete",
                    style: "is-danger",
                    action: async () => {
                        modal.close();
                        this.page.loading = true;
                        if (typeof this.id !== 'number')
                            throw "ERROR";
                        await this.api.delete(this.id);
                        this.reloadList();
                        this.page.loading = false;
                        this.page?.pageManager?.remove(this.page);
                    }
                }
            ]
        });
        modal.open();
        return true;
    }
    reloadList() {
        let list = this.list;
        if (list === null)
            return;
        if (list instanceof Array) {
            for (let l of list) {
                this.page.pageManager.listManager.getList(l.id)?.reload();
            }
        }
        else {
            this.page.pageManager.listManager.getList(list.id)?.reload();
        }
    }
}
Form.buttons = [];
export function form(icon, api, list = null) {
    return function (constructor) {
        Object.defineProperty(constructor, 'icon', { value: icon, writable: true });
        Object.defineProperty(constructor, 'list', { value: list, writable: true });
        Object.defineProperty(constructor, 'api', { value: api, writable: true });
    };
}
export function button(icon, action = null, onlyIfExists = false) {
    return function (constructor) {
        if (!constructor.hasOwnProperty('buttons'))
            Object.defineProperty(constructor, 'buttons', { value: [], writable: true });
        if (icon instanceof FaIcon && action !== null)
            constructor.buttons.push({ icon, action, onlyIfExists });
        if (!(icon instanceof FaIcon))
            constructor.buttons.push(icon);
    };
}
export let buttons = {
    save: {
        icon: options.form.button.save.icon,
        action: (form) => form.saveItem(),
        onlyIfExists: false
    },
    reload: {
        icon: options.form.button.reload.icon,
        action: (form) => form.loadItem(),
        onlyIfExists: true
    },
    delete: {
        icon: options.form.button.delete.icon,
        action: (form) => form.deleteItem(),
        onlyIfExists: true
    }
};
//# sourceMappingURL=form.js.map