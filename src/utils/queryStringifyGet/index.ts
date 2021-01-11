export function queryStringify(data: object): string {
  const arr = Object.entries(data);
  return arr.reduce((acc, [k, v], index) => {
    if (index === 0) {
      return `${acc}?${k}=${v}`;
    }
    return `${acc}&${k}=${v}`;
  }, '');
}
