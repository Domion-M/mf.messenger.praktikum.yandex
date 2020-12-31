export function queryStringify(data) {
    const arr = Object.entries(data);
    return arr.reduce((acc, [k, v], index) => {
        if (index === 0) {
            return acc += `?${k}=${v}`;
        }
        else {
            return acc += `&${k}=${v}`;
        }
    }, '');
}
;
//# sourceMappingURL=index.js.map