import FaIcon from "gold/lib/fa-icon";
import handleFetch from "gold/lib/handle-fetch";
import GoldList from "gold/lib/list";
import { get, writable } from "svelte/store";
import FormPage from "../form/form-page";
import CCard from "../../components/list/card.svelte";
import CList from "../../components/list/list.svelte";
import ListButton from "./list-button";
import options from "../options";
export default class List extends GoldList {
    constructor() {
        super();
        this.options = {
            quicksearch: false,
            views: false,
            sortings: false,
            pagesize: 5
        };
        // @ts-ignore
        this.$items = writable([]);
        this.$count = writable(0);
        this.$page = writable(1);
        this.view = null;
        this.sorting = null;
        this.quicksearch = "";
        this.buttons = [];
        for (let button of this.constructor.buttons) {
            this.addButton(new ListButton(button.icon, () => button.action(this)));
        }
    }
    cardifyItem(item) { return item; }
    static get id() { return this.name; }
    get id() {
        // @ts-ignore
        return this.constructor.id;
    }
    get icon() { return this.constructor.icon; }
    get title() { return this.constructor.title; }
    get api() { return this.constructor.api; }
    get form() { return this.constructor.form(); }
    get component() { return CList; }
    get card() { return CCard; }
    addButton(button) {
        this.buttons.push(button);
    }
    open(item) {
        // @ts-ignore
        this.listManager.pageManager.add(new FormPage(new this.form(item.id)));
    }
    async attached(listManager) {
        await super.attached(listManager);
        await this.setOptions();
        if (this.options.sortings !== null)
            this.sorting = '+' + Object.keys(this.options.sortings)[0];
        if (this.options.views !== null)
            this.view = Object.keys(this.options.views)[0];
        await this.reload();
    }
    async setOptions() {
        const res = await this.api.getOptions();
        this.options = Object.assign(this.options, await handleFetch(res));
    }
    async reload() {
        const data = await this.api.get(this.options.pagesize, get(this.$page), this.view, this.sorting, this.quicksearch, this.filter);
        this.$items.set(data.items);
        this.$count.set(data.count);
        this.$page.set(data.page);
    }
    addNew() {
        // @ts-ignore
        this.listManager.pageManager.add(new FormPage(new this.form()));
    }
}
List.buttons = [];
export let buttons = {
    new: {
        icon: options.list.new.icon,
        action: (list) => list.addNew()
    }
};
export function button(icon, action = null) {
    return function (constructor) {
        if (icon instanceof FaIcon && action !== null)
            constructor.buttons.push({ icon, action });
        else if (!(icon instanceof FaIcon))
            constructor.buttons.push(icon);
    };
}
export function list(title, icon, api, form) {
    return function (constructor) {
        constructor.icon = icon;
        constructor.title = title;
        constructor.api = api;
        constructor.form = form;
    };
}
//# sourceMappingURL=list.js.map