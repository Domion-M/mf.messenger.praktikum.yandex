import { Router } from '../../../utils/Router';
describe('Router :', () => {
    let router = new Router('#root');
    beforeEach(() => {
        router = new Router('#root');
        window.history.back = jest.fn();
        window.history.forward = jest.fn();
        window.history.pushState = jest.fn();
    });
    test('Should be make method', () => {
        expect(router.use).toBeDefined();
        expect(router.go).toBeDefined();
        expect(router.forward).toBeDefined();
        expect(router.back).toBeDefined();
    });
    test('should be use method', () => {
        router.back();
        router.forward();
        router.go('/auth');
        expect(window.history.back).toBeCalled();
        expect(window.history.forward).toBeCalled();
        expect(window.history.pushState).toBeCalledWith({}, '', '/auth');
    });
});
//# sourceMappingURL=router.spec.js.map