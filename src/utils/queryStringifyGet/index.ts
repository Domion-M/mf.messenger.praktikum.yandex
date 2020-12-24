type arrType = [k: string, v: string]
export function queryStringify(data: object): string {
    let stringGetRequest: string = '';
    const arr = Object.entries(data);
    arr.forEach(([k, v]: arrType, index: number) => {
        if (index === 0) {
            stringGetRequest += `?${k}=${v}`;
        } else {
            stringGetRequest += `&${k}=${v}`;
        }
    });
    return stringGetRequest;
}