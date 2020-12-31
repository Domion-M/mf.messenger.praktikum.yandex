import { queryStringify } from '.';
describe('Function transform Object to string:', () => {
    test('should be definde', () => {
        expect(queryStringify).toBeDefined();
    });
    test('should be return string', () => {
        const obj = { data: 42, data2: 50 };
        const result = '?data=42&data2=50';
        expect(queryStringify(obj)).toBe(result);
    });
});
//# sourceMappingURL=queryString.spec.js.map