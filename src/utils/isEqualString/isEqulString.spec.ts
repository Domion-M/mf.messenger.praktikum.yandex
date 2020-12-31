import { isEqualString } from '.';

describe('Function render:', () => {
    test('should be definde', () => {
        expect(isEqualString).toBeDefined()
    });
    test('Shoude be return ', () => {
        expect(isEqualString('string', 'string')).toBe(true);
        expect(isEqualString('object', 'string')).toBe(false);
    });
});
