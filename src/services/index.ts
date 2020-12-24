import { API_CONFIG } from '../config/apiConfig.js';
import ApiServices from './Api/index.js';
import Auth from './Auth/index.js';
import Users from './User/index.js';
import Chats from './Chats/index.js'

const API = new ApiServices(API_CONFIG.BASE_URL);
const AuthService = new Auth(API);
const UsersService = new Users(API);
const ChatsService = new Chats(API)

export { AuthService, UsersService, ChatsService }