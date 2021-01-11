import ApiServices from '../Api';

type UserSignUpType = {

  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string

};
type UserLoginType = {
  password: string
  login: string
};

export default class AuthService {
  APIService: ApiServices;

  constructor(APIService: ApiServices) {
    this.APIService = APIService;
  }

  signIn(data: UserLoginType) {
    return this.APIService.post('auth/signin', { data });
  }

  singUp(data: UserSignUpType) {
    return this.APIService.post('auth/signup/', { data });
  }

  signOut() {
    return this.APIService.post('auth/logout');
  }
}
