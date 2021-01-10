import Handlebars from 'handlebars';
import { router } from './../../';
import { render } from '../../utils/Render';
import Button from '../../components/Button';
import InputWrapper from '../../components/InputWrapper';
import { pageInfoType } from '../../types/index';
import Input from '../../components/Input';
import { tpl } from './tamplate';
import Block from '../../utils/Block';
import { AuthService } from '../../services';
import ErrorModal from '../../components/ErrorModal';

const pageInfo: pageInfoType = {
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
        button:
        {
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
    inputFocusBlur.forEach((el: Element) => {
        const listClass = el.classList[1]
        if (listClass === 'active') {
            userDate.push((el as HTMLInputElement).value);
        }
        else {
            (el as HTMLInputElement).focus();
        }
    });
    if (userDate.length === inputFocusBlur.length) {
        const user = new UserAuth(userDate[0], userDate[1]);
        AuthService.signIn(user).then((res: XMLHttpRequest) => {
            if (res.status >= 200 && res.status <= 299) {
                router.go('/');
            }
        }).catch(() => modalError.openAndClose())
    }
};

function validLogin(this: HTMLElement, e: Event) {
    const inputPlaceholder = this.parentElement?.parentElement;
    if (e.type === 'focus') {
        inputPlaceholder?.classList.add('animation')
    } else if (e.type === 'blur') {
        if ((this as HTMLInputElement).value === '') {
            inputPlaceholder?.classList.remove('animation');
        }
        input.validation();
    };
};

function validPassword(this: HTMLElement, e: Event) {
    const inputPlaceholder = this.parentElement?.parentElement;
    if (e.type === 'focus') {
        inputPlaceholder?.classList.add('animation');
    } else if (e.type === 'blur') {
        if ((this as HTMLInputElement).value === '') {
            inputPlaceholder?.classList.remove('animation');
        };
        inputPass.validPassword();
    };
};
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
