import handleFetch from "gold/lib/handle-fetch";
export default class Api {
    constructor(apiBase) {
        this.apiBase = apiBase;
    }
    getOptions() { return fetch(this.apiBase + '/list/options', { method: "POST" }); }
    get(pagesize, page, view, sorting, quicksearch, filter) {
        return fetch(this.apiBase + '/list/get', { method: "POST", body: JSON.stringify({ pagesize, page, sorting, view, quicksearch, filter }) }).then(handleFetch);
    }
}
//# sourceMappingURL=api.js.map