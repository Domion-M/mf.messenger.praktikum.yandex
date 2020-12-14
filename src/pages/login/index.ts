import Handlebars from 'handlebars';
import { render } from '../../utils/Render/index.js';
import Button from '../../components/Button/index.js';
import InputWrapper from '../../components/InputWrapper/index.js';
import { pageInfoType } from '../../types/index';
import Input from '../../components/Input/index.js';
import { tpl } from './tamplate.js';




const pageInfo: pageInfoType = {
    page: {
        title: 'Вход',
    },
};

const root: HTMLElement | null = document.getElementById('root');
const template = Handlebars.compile(tpl);
if (root) root.innerHTML = template(pageInfo);

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
        button:
        {
            type: 'button',
            className: 'login-and-signin-form__entry__bottom-check',
            text: 'Нет аккаунта?',
        }
    },
    onClick: () => document.location.href = '../signin/',
});
const input = new Input({
    infoElement: {
        input: {
            name: "login",
            type: "text",
            value: '',
            error: false,
        }
    },
    onFocus: validLogin,
    onBlur: validLogin,
});
const inputPass = new Input({
    infoElement: {
        input: {
            name: "password",
            type: "password",
            value: '',
            error: false
        }
    },
    onFocus: validPassword,
    onBlur: validPassword,
});

const inputWrap = new InputWrapper({
    infoElement: {
        inputWrapper: [
            {
                placeholder: 'Логин',
                className: 'login-and-signin-form__entry__placeholder',
                classInput: 'login-enter',
            },
            {
                placeholder: 'Пароль',
                className: 'login-and-signin-form__entry__placeholder',
                classInput: 'password-enter',
            },
        ],
    },
});


class UserAuth {
    constructor(
        public login: string,
        public password: string,
    ) {
        this.login = login;
        this.password = password;
    };
};

function logDateUser(e: Event) {
    e.preventDefault();
    const userDate: string[] = [];
    const inputFocusBlur: NodeListOf<Element> = document.querySelectorAll('.login-and-signin-form__entry input');
    inputFocusBlur.forEach(el => {
        if ((<HTMLInputElement>el).value.trim() === '') {
            (<HTMLInputElement>el).focus()
        } else {
            userDate.push((<HTMLInputElement>el).value);
        }
    });
    const user = new UserAuth(userDate[0], userDate[1]);
    console.log(user);
};

render('.btn-container', buttonAuth);
render('.btn-container', buttonInfo);
render('.input-container', inputWrap);
render('.login-enter', input);
render('.password-enter', inputPass);

function validLogin(e: Event) {
    const inputPlaceholder = this.parentElement.parentElement;
    if (e.type === 'focus') {
        inputPlaceholder.classList.add('animation')
    } else if (e.type === 'blur') {
        if (this.value === '') {
            inputPlaceholder.classList.remove('animation');
        };
        input.validation();
    };
};

function validPassword(e: Event) {
    const inputPlaceholder = this.parentElement.parentElement;
    if (e.type === 'focus') {
        inputPlaceholder.classList.add('animation');
    } else if (e.type === 'blur') {
        if (this.value === '') {
            inputPlaceholder.classList.remove('animation');
        };
        inputPass.validPassword();
    };
};
