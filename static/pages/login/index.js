import { render } from '../../utils/Render/index.js';
import Button from '../../components/Button/index.js';
import Input from '../../components/Input/index.js';
const pageInfo = {
    page: {
        title: 'Вход',
    },
};
const tpl = `
{{#with page}}
<main class="wrap-page text-center">
<div class="login-and-signin-form">
    <h3 class="login-and-signin-form__title">{{title}}</h3>
    <div>
        <form action="/" method="POST">
        <div class="input-container"></div>
            <div class="btn-container">
            </div>
        </form>
    </div>
</div>
</main>
{{/with}}`;
const root = document.getElementById('root');
const template = Handlebars.compile(tpl);
if (root)
    root.innerHTML = template(pageInfo);
const buttonAuth = new Button({
    infoElement: {
        button: {
            type: 'submit',
            className: 'general-btn log-array',
            id: 'login-btn',
            text: 'Авторизоваться',
        }
    },
    onClick: logDateUser,
});
const buttonInfo = new Button({
    infoElement: {
        button: {
            type: 'button',
            className: 'login-and-signin-form__entry__bottom-check',
            text: 'Нет аккаунта?',
        }
    },
    onClick: () => document.location.href = '../signin/',
});
const inputLogin = new Input({
    infoElement: {
        input: [
            {
                placeholder: 'Логин',
                name: 'login',
                type: 'text',
                className: 'login-and-signin-form__entry__placeholder',
                error: true
            },
            {
                placeholder: 'Пароль',
                name: 'password',
                type: 'password',
                className: 'login-and-signin-form__entry__placeholder',
                error: true
            },
        ],
    },
});
class UserAuth {
    constructor(login, password) {
        this.login = login;
        this.password = password;
        this.login = login;
        this.password = password;
    }
    ;
}
;
function logDateUser(e) {
    e.preventDefault();
    const userDate = [];
    const inputFocusBlur = document.querySelectorAll('.login-and-signin-form__entry input');
    inputFocusBlur.forEach(el => {
        if (el.value.trim() === '') {
            el.focus();
        }
        else {
            userDate.push(el.value);
        }
    });
    const user = new UserAuth(userDate[0], userDate[1]);
    console.log(user);
}
render('.btn-container', buttonAuth);
render('.btn-container', buttonInfo);
render('.input-container', inputLogin);
const inputFocusBlur = document.querySelectorAll('.login-and-signin-form__entry input');
function validFocusAndBlurInput(e) {
    const inputPlaceholder = this.nextSibling.nextSibling;
    if (e.type === 'focus') {
        inputPlaceholder.classList.add('active');
        inputPlaceholder.classList.remove('error');
    }
    else if (e.type === 'blur') {
        if (this.value.trim() === '') {
            inputPlaceholder.classList.remove('active');
            inputPlaceholder.classList.add('error');
        }
    }
}
;
inputFocusBlur.forEach(item => {
    item.addEventListener('focus', validFocusAndBlurInput);
    item.addEventListener('blur', validFocusAndBlurInput);
});
//# sourceMappingURL=index.js.map