export function queryStringify(data) {
    let stringGetRequest = '';
    const arr = Object.entries(data);
    arr.forEach(([k, v], index) => {
        if (index === 0) {
            stringGetRequest += `?${k}=${v}`;
        }
        else {
            stringGetRequest += `&${k}=${v}`;
        }
    });
    return stringGetRequest;
}
//# sourceMappingURL=index.js.map