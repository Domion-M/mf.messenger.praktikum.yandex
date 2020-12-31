import ApiServices from '.';
describe('Request server:', () => {
    const xhrMockObj = {
        open: jest.fn(),
        send: jest.fn(),
        addEventListener: jest.fn().mockImplementation((_, cb) => {
            cb();
        }),
        setRequestHeader: jest.fn(),
    };
    let api = new ApiServices('/');
    const xhrMockClass = () => xhrMockObj;
    //@ts-ignore
    window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
    test('Should be defined', () => {
        expect(api.get).toBeDefined();
        expect(api.post).toBeDefined();
        expect(api.put).toBeDefined();
        expect(api.delete).toBeDefined();
    });
    test("get returns Promise", () => {
        const req = api.get("/");
        expect(req).toBeInstanceOf(Promise);
    });
    test("get calls request", () => {
        const spy = jest.spyOn(api, "request");
        api.get("/");
        expect(spy).toHaveBeenCalled();
    });
    test("put returns Promise", () => {
        const req = api.put("/", { data: { name: 'alex' } });
        expect(req).toBeInstanceOf(Promise);
    });
    test("put calls request", () => {
        const spy = jest.spyOn(api, "request");
        api.put("/", { data: { name: 'alex' } });
        expect(spy).toHaveBeenCalled();
    });
    test("post returns Promise", () => {
        const req = api.post("/", { data: { name: 'alex' } });
        expect(req).toBeInstanceOf(Promise);
    });
    test("post calls request", () => {
        const spy = jest.spyOn(api, "request");
        api.post("/", { data: { name: 'alex' } });
        expect(spy).toHaveBeenCalled();
    });
});
//# sourceMappingURL=api.spec.js.map