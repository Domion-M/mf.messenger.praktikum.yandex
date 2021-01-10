import ApiServices from '../Api';

type userSignUpType = {

    first_name: string,
    second_name: string,
    login: string,
    email: string,
    password: string,
    phone: string

}
type userLoginType = {
    password: string
    login: string
}

export default class AuthService {
    APIService: ApiServices
    constructor(APIService: ApiServices) {
        this.APIService = APIService
    }

    signIn(data: userLoginType) {
        return this.APIService.post('auth/signin', { data })
    }

    singUp(data: userSignUpType) {
        return this.APIService.post(`auth/signup/`, { data })
    }

    signOut() {
        return this.APIService.post('auth/logout')
    }

}