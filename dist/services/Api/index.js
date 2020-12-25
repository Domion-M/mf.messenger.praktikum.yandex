import { queryStringify } from "../../utils/queryStringifyGet/index.js";
var METHODS;
(function (METHODS) {
    METHODS["GET"] = "GET";
    METHODS["POST"] = "POST";
    METHODS["PUT"] = "PUT";
    METHODS["DELETE"] = "DELETE";
})(METHODS || (METHODS = {}));
class ApiServices {
    constructor(url) {
        this.baseUrl = url;
    }
    get(url, options) {
        let get = '';
        if (options) {
            const { data } = options;
            get = queryStringify(data);
        }
        return this.request(this.baseUrl + url + get, Object.assign(Object.assign({}, options), { method: METHODS.GET }));
    }
    post(url, options) {
        return this.request(this.baseUrl + url, Object.assign(Object.assign({}, options), { method: METHODS.POST }));
    }
    put(url, options) {
        return this.request(this.baseUrl + url, Object.assign(Object.assign({}, options), { method: METHODS.PUT }));
    }
    delete(url, options) {
        return this.request(this.baseUrl + url, Object.assign(Object.assign({}, options), { method: METHODS.DELETE }));
    }
    request(url, options, timeout = 5000) {
        const { method, data } = options;
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = () => {
                resolve(xhr);
            };
            if (!(data instanceof FormData)) {
                xhr.setRequestHeader('Content-Type', 'application/json');
            }
            xhr.withCredentials = true;
            xhr.timeout = timeout;
            xhr.onerror = reject;
            xhr.ontimeout = reject;
            if (method === 'GET') {
                xhr.send();
            }
            else if (data instanceof FormData) {
                xhr.send(data);
            }
            else {
                xhr.send(JSON.stringify(data));
            }
        });
    }
}
export default ApiServices;
//# sourceMappingURL=index.js.map