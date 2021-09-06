import handleFetch from "gold/lib/handle-fetch";
export default class Api {
    constructor(apiBase) {
        this.apiBase = apiBase;
    }
    get(id) {
        return fetch(this.apiBase + "/get/" + id, { method: "POST" }).then(handleFetch);
    }
    blank() {
        return fetch(this.apiBase + "/blank", { method: "POST" }).then(handleFetch);
    }
    create(item) {
        return fetch(this.apiBase + "/create/" + item.id, { method: "POST", body: JSON.stringify({ item }) }).then(handleFetch);
    }
    update(item) {
        return fetch(this.apiBase + "/update/" + item.id, { method: "POST", body: JSON.stringify({ item }) }).then(handleFetch);
    }
    delete(id) {
        return fetch(this.apiBase + "/delete/" + id, { method: "POST" }).then(handleFetch).then(() => true);
    }
}
//# sourceMappingURL=api.js.map