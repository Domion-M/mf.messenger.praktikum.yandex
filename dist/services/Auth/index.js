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
        return this.APIService.post('auth/logout')
            .then(response => response)
            .catch(e => { throw e; });
    }
}
//# sourceMappingURL=index.js.map