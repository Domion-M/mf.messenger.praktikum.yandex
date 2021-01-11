import { API_CONFIG } from '../config/apiConfig';
import ApiServices from './Api';
import Auth from './Auth';
import Users from './User';
import Chats from './Chats';

const API = new ApiServices(API_CONFIG.BASE_URL);
const AuthService = new Auth(API);
const UsersService = new Users(API);
const ChatsService = new Chats(API);

export { AuthService, UsersService, ChatsService };
