import { router } from './../../index.js';
import { render } from '../../utils/Render/index.js';
import Button from '../../components/Button/index.js';
import InputWrapper from '../../components/InputWrapper/index.js';
import Input from '../../components/Input/index.js';
import { tpl } from './tamplate.js';
import Block from '../../utils/Block/index.js';
import { AuthService } from '../../services/index.js';
import ErrorModal from '../../components/ErrorModal/index.js';
const pageInfo = {
    page: {
        title: 'Вход',
    },
};
const template = Handlebars.compile(tpl);
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
    onClick: () => router.go('/signin'),
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
const modalError = new ErrorModal({
    className: "error-modal-window",
    infoElement: {
        error: {
            errorMessage: 'Неправильный логин или пороль'
        }
    }
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
    inputFocusBlur.forEach((el) => {
        const listClass = el.classList[1];
        if (listClass === 'active') {
            userDate.push(el.value);
        }
        else {
            el.focus();
        }
    });
    if (userDate.length === inputFocusBlur.length) {
        const user = new UserAuth(userDate[0], userDate[1]);
        AuthService.signIn(user).then((res) => {
            if (res.status >= 200 && res.status <= 299) {
                router.go('/');
            }
        }).catch(() => modalError.openAndClose());
    }
}
;
function validLogin(e) {
    var _a;
    const inputPlaceholder = (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
    if (e.type === 'focus') {
        inputPlaceholder === null || inputPlaceholder === void 0 ? void 0 : inputPlaceholder.classList.add('animation');
    }
    else if (e.type === 'blur') {
        if (this.value === '') {
            inputPlaceholder === null || inputPlaceholder === void 0 ? void 0 : inputPlaceholder.classList.remove('animation');
        }
        input.validation();
    }
    ;
}
;
function validPassword(e) {
    var _a;
    const inputPlaceholder = (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
    if (e.type === 'focus') {
        inputPlaceholder === null || inputPlaceholder === void 0 ? void 0 : inputPlaceholder.classList.add('animation');
    }
    else if (e.type === 'blur') {
        if (this.value === '') {
            inputPlaceholder === null || inputPlaceholder === void 0 ? void 0 : inputPlaceholder.classList.remove('animation');
        }
        ;
        inputPass.validPassword();
    }
    ;
}
;
export class Login extends Block {
    render() {
        return template(pageInfo);
    }
    getComponent() {
        render('.btn-container', buttonAuth);
        render('.btn-container', buttonInfo);
        render('.input-container', inputWrap);
        render('.login-enter', input);
        render('.password-enter', inputPass);
        render('main', modalError);
    }
}
//# sourceMappingURL=index.js.map