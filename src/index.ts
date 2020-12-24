import { Error } from './pages/404/index.js';
import { Profile } from './pages/profile/index.js';
import { Chats } from './pages/chats/index.js';
import { Signin } from './pages/signin/index.js';
import { Login } from './pages/login/index.js';
import { Router } from "./utils/Router/index.js";
import { ChangeProfile } from './pages/changeProfile/index.js';
import { ChangePassword } from './pages/changePassword/index.js';

export const router = new Router("#root");

router
    .use("/signin", Signin)
    .use("/auth", Login)
    .use("/changeprofile", ChangeProfile)
    .use("/changepassword", ChangePassword)
    .use("/profile", Profile)
    .use("/", Chats)
    .use("/404", Error)
    .start();
