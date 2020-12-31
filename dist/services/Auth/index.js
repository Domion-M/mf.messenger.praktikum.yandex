export default class AuthService {
    constructor(APIService) {
        this.APIService = APIService;
    }
    signIn(data) {
        return this.APIService.post('auth/signin', { data });
    }
    singUp(data) {
        return this.APIService.post(`auth/signup/`, { data });
    }
    signOut() {
        return this.APIService.post('auth/logout');
    }
}
//# sourceMappingURL=index.js.map