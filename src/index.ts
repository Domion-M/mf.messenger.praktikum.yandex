import {
  Error,
  Chats,
  Profile,
  ChangePassword,
  ChangeProfile,
  Login,
  Signin,
} from '@pages';
import { Router } from './utils/Router';

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
