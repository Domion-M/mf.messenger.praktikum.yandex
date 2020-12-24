export default class UsersService {
    constructor(APIService) {
        this.APIService = APIService;
    }
    getAuthUser() {
        return this.APIService.get(`auth/user`);
    }
    changeUserProfile(data) {
        return this.APIService.put(`user/profile`, { data });
    }
    changeUserAvatar(data) {
        return this.APIService.put('user/profile/avatar', { data });
    }
    changeUserPassword(data) {
        return this.APIService.put('/user/password', { data });
    }
    getAllUsersOnline(data) {
        return this.APIService.post('user/search', { data });
    }
}
//# sourceMappingURL=index.js.map