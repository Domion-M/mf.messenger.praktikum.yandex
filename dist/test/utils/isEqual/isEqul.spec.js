import { isEqual } from '../../../utils/isEqual';
describe('Function render:', () => {
    test('should be definde', () => {
        expect(isEqual).toBeDefined();
    });
    test('Shoude be return ', () => {
        expect(isEqual('string', 'string')).toBe(true);
        expect(isEqual('object', 'string')).toBe(false);
    });
});
//# sourceMappingURL=isEqul.spec.js.map