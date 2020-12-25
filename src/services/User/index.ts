import { ChangeUserPasswordType, userType } from "../../types/index.js"
import ApiServices from "../Api/index.js"



export default class UsersService {
    APIService: ApiServices
    constructor(APIService: ApiServices) {
        this.APIService = APIService
    }

    getAuthUser() {
        return this.APIService.get(`auth/user`)
    }

    changeUserProfile(data: userType) {
        return this.APIService.put(`user/profile`, { data })
    }

    changeUserAvatar(data: FormData) {
        return this.APIService.put('user/profile/avatar', { data })

    }
    changeUserPassword(data: ChangeUserPasswordType) {
        return this.APIService.put('/user/password', { data })
    }
    getAllUsersOnline(data: { login: string }) {
        return this.APIService.post('user/search', { data })
    }

}