var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { API_CONFIG } from '../../../config/apiConfig';
import ApiServices from '../../../services/Api';
describe('Request server:', () => {
    const xhrMockObj = {
        open: jest.fn(),
        send: jest.fn(),
        addEventListener: jest.fn().mockImplementation((_, cb) => {
            cb();
        }),
        setRequestHeader: jest.fn(),
    };
    let api = new ApiServices(API_CONFIG.BASE_URL);
    const xhrMockClass = () => xhrMockObj;
    //@ts-ignore
    window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
    test('Should be defined', () => {
        expect(api.get).toBeDefined();
        expect(api.post).toBeDefined();
        expect(api.put).toBeDefined();
        expect(api.delete).toBeDefined();
    });
    test('test XMLHttprequst method', () => __awaiter(void 0, void 0, void 0, function* () {
        yield api.get('/');
        expect(xhrMockObj.addEventListener).toBeCalledTimes(3);
        expect(xhrMockObj.addEventListener.mock.calls[0][0]).toEqual('load');
        expect(xhrMockObj.addEventListener.mock.calls[1][0]).toEqual('onerror');
        expect(xhrMockObj.addEventListener.mock.calls[2][0]).toEqual('ontimeout');
        expect(xhrMockObj.addEventListener.mock.calls[0][1]).toBeInstanceOf(Function);
        expect(xhrMockObj.addEventListener.mock.calls[1][1]).toBeInstanceOf(Function);
        expect(xhrMockObj.addEventListener.mock.calls[2][1]).toBeInstanceOf(Function);
    }));
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