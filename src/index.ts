import { Error } from './pages/404';
import { Router } from './utils/Router';
import { Login } from './pages/login';
import { Signin } from './pages/signin';
import { Profile } from './pages/profile';
import { Chats } from './pages/chats';
import { ChangeProfile } from './pages/changeProfile';
import { ChangePassword } from './pages/changePassword';

import './styles/style.scss';

export const router = new Router('#root');

router
  .use('/signin', Signin)
  .use('/auth', Login)
  .use('/changeprofile', ChangeProfile)
  .use('/changepassword', ChangePassword)
  .use('/profile', Profile)
  .use('/', Chats)
  .use('/404', Error)
  .start();
