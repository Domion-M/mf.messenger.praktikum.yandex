import { render } from '../../utils/Render/index.js';
import Button from '../../components/Button/index.js';
import Input from '../../components/Input/index.js';
const pageInfo = {
    page: {
        title: 'Регистрация',
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
            id: 'signin-btn',
            text: 'Авторизоваться',
        },
    },
    onClick: logDateUser,
});
const buttonInfo = new Button({
    infoElement: {
        button: {
            type: 'button',
            className: 'login-and-signin-form__entry__bottom-check',
            text: 'Войти',
        },
    },
    onClick: () => document.location.href = '../login/',
});
const inputLogin = new Input({
    infoElement: {
        input: [
            {
                placeholder: 'Почта',
                name: 'email',
                type: 'email',
                className: 'login-and-signin-form__entry__placeholder',
            },
            {
                placeholder: 'Логин',
                name: 'login',
                type: 'text',
                className: 'login-and-signin-form__entry__placeholder',
            },
            {
                placeholder: 'Имя',
                name: 'first_name',
                type: 'text',
                className: 'login-and-signin-form__entry__placeholder',
            },
            {
                placeholder: 'Фамилия',
                name: 'second_name',
                type: 'text',
                className: 'login-and-signin-form__entry__placeholder',
            },
            {
                placeholder: 'Телефон',
                name: 'phone',
                type: 'text',
                className: 'login-and-signin-form__entry__placeholder',
            },
            {
                placeholder: 'Пароль',
                name: 'password',
                type: 'password',
                className: 'login-and-signin-form__entry__placeholder',
            },
            {
                placeholder: 'Пароль (ещё раз)',
                name: 'passwordCheck',
                type: 'password',
                className: 'login-and-signin-form__entry__placeholder',
                error: false
            },
        ],
    },
});
render('.btn-container', buttonAuth);
render('.btn-container', buttonInfo);
render('.input-container', inputLogin);
class UserSignin {
    constructor(email, login, first_name, second_name, phone, password) {
        this.email = email;
        this.login = login;
        this.first_name = first_name;
        this.second_name = second_name;
        this.phone = phone;
        this.password = password;
        this.login = login;
        this.password = password;
        this.email = email;
        this.first_name = first_name;
        this.second_name = second_name;
        this.phone = phone;
    }
    ;
}
;
function logDateUser(e) {
    e.preventDefault();
    const inputFocusBlur = document.querySelectorAll('.login-and-signin-form__entry input');
    const userDate = [];
    inputFocusBlur.forEach(el => {
        if (el.value.trim() === '') {
            el.focus();
            return;
        }
        else {
            userDate.push(el.value);
        }
    });
    if (userDate.length === inputFocusBlur.length) {
        if (userDate[5] === userDate[6]) {
            const user = new UserSignin(userDate[0], userDate[1], userDate[2], userDate[3], userDate[4], userDate[5]);
            console.log(user);
        }
        else {
            inputFocusBlur[6].focus();
        }
    }
}
;
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
        ;
    }
    ;
}
;
inputFocusBlur.forEach(item => {
    item.addEventListener('focus', validFocusAndBlurInput);
    item.addEventListener('blur', validFocusAndBlurInput);
});
//# sourceMappingURL=index.js.map