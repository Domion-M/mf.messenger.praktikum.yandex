import { queryStringify } from "../../utils/queryStringifyGet"

enum METHODS {

    GET = 'GET',
    POST = 'POST',
    PUT = "PUT",
    DELETE = 'DELETE'

}

type optionsType = {
    data?: object,
    method: string
}

class ApiServices {
    baseUrl: string
    constructor(url: string) {
        this.baseUrl = url
    }

    get(url: string, options?: { data?: any }) {
        let get = ''
        if (options) {
            const { data } = options
            get = queryStringify(data)
        }
        return this.request(this.baseUrl + url + get, { ...options, method: METHODS.GET });
    }

    post(url: string, options?: { data: object }) {
        return this.request(this.baseUrl + url, { ...options, method: METHODS.POST });
    }

    put(url: string, options: { data: object }) {
        return this.request(this.baseUrl + url, { ...options, method: METHODS.PUT });
    }

    delete(url: string, options: { data: object }) {
        return this.request(this.baseUrl + url, { ...options, method: METHODS.DELETE });
    }

    request(url: string, options: optionsType, timeout = 5000) {

        const { method, data } = options;

        return new Promise((resolve, reject) => {

            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.addEventListener('load', () => {
                resolve(xhr);
            })

            if (!(data instanceof FormData)) {
                xhr.setRequestHeader('Content-Type', 'application/json');
            }

            xhr.withCredentials = true;
            xhr.timeout = timeout;

            xhr.addEventListener('onerror', () => {
                reject
            })
            xhr.addEventListener('ontimeout', () => {
                reject
            })

            if (method === 'GET') {
                xhr.send();
            } else if (data instanceof FormData) {
                xhr.send(data);
            } else {
                xhr.send(JSON.stringify(data));
            }
        });

    }

}

export default ApiServices