import Handlebars from 'handlebars';
import { router } from './../../index.js';
import { render } from '../../utils/Render/index.js';
import Button from '../../components/Button/index.js';
import InputWrapper from '../../components/InputWrapper/index.js';
import { pageInfoType } from '../../types/index';
import { tpl } from './template.js';
import Input from '../../components/Input/index.js';
import Block from '../../utils/Block/index.js';
import { AuthService } from '../../services/index.js';
import ErrorModal from '../../components/ErrorModal/index.js';

const pageInfo: pageInfoType = {
    page: {
        title: 'Регистрация',
    },
};

const template = Handlebars.compile(tpl);

const buttonAuth = new Button({
    infoElement: {
        button:
        {
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
        button:
        {
            type: 'button',
            className: 'login-and-signin-form__entry__bottom-check',
            text: 'Войти',
        },
    },
    onClick: () => router.go('/auth'),
});

const inputWrapper = new InputWrapper({
    infoElement: {
        inputWrapper: [
            {
                placeholder: 'Почта',
                className: 'login-and-signin-form__entry__placeholder',
                classInput: 'email-enter'

            },
            {
                placeholder: 'Логин',
                className: 'login-and-signin-form__entry__placeholder',
                classInput: 'login-enter'

            },
            {
                placeholder: 'Имя',
                className: 'login-and-signin-form__entry__placeholder',
                classInput: 'first-name-enter'

            },
            {
                placeholder: 'Фамилия',
                className: 'login-and-signin-form__entry__placeholder',
                classInput: 'second-name-enter'

            },
            {
                placeholder: 'Телефон',
                className: 'login-and-signin-form__entry__placeholder',
                classInput: 'phone-enter'

            },
            {
                placeholder: 'Пароль',
                className: 'login-and-signin-form__entry__placeholder',
                classInput: 'password-enter'

            },
            {
                placeholder: 'Пароль (еще раз)',
                className: 'login-and-signin-form__entry__placeholder',
                classInput: 'password-too-enter'

            },
        ]

    },
});
const inputEmail = new Input({
    infoElement: {
        input: {
            type: "text",
            name: "email",
            value: '',
            error: false,

        }
    },
    onFocus: validEmail,
    onBlur: validEmail,
});

const inputlogin = new Input({
    infoElement: {
        input: {
            type: "text",
            name: "login",
            value: '',
            error: false,

        }
    },
    onFocus: validationLogin,
    onBlur: validationLogin,
});
const inputName = new Input({
    infoElement: {
        input: {
            type: "text",
            name: "first_name",
            value: '',
            error: false,

        }
    },
    onFocus: validationName,
    onBlur: validationName,
});

const inputSecondName = new Input({
    infoElement: {
        input: {
            type: "text",
            name: "second_name",
            value: '',
            error: false,

        }
    },
    onFocus: validationSecondName,
    onBlur: validationSecondName,
});

const inputPhone = new Input({
    infoElement: {
        input: {
            type: "text",
            name: "phone",
            value: '',
            error: false,

        }
    },
    onFocus: validationPhone,
    onBlur: validationPhone,
});

const inputPassword = new Input({
    infoElement: {
        input: {
            type: "password",
            name: "password",
            value: '',
            error: false,

        }
    },
    onFocus: validationPassword,
    onBlur: validationPassword,
});

const inputPasswordToo = new Input({
    infoElement: {
        input: {
            type: "password",
            name: "passwordCheck",
            value: '',
            error: false,

        }
    },
    onFocus: validationPasswordToo,
    onBlur: validationPasswordToo,
});

const modalError = new ErrorModal({
    className: "error-modal-window",
    infoElement: {
        error: {
            errorMessage: 'Что-то пошло не так'
        }

    }
});

class UserSignin {
    constructor(
        public email: string,
        public login: string,
        public first_name: string,
        public second_name: string,
        public phone: string,
        public password: string) {
        this.login = login;
        this.password = password;
        this.email = email;
        this.first_name = first_name;
        this.second_name = second_name;
        this.phone = phone;
    };

};
function logDateUser(e: Event) {
    e.preventDefault();
    const inputFocusBlur = document.querySelectorAll('.login-and-signin-form__entry input');
    const userDate: string[] = [];
    inputFocusBlur.forEach(el => {
        const listClass = el.classList[1]
        if (listClass === 'active') {
            userDate.push((<HTMLInputElement>el).value);
        }
        else {
            (<HTMLInputElement>el).focus();
        }
    });
    if (userDate.length === inputFocusBlur.length) {
        if (userDate[5] === userDate[6]) {
            const user = new UserSignin(userDate[0], userDate[1], userDate[2], userDate[3], userDate[4], userDate[5]);
            AuthService.singUp(user).then((res: XMLHttpRequest) => {
                if (res.status > 200 && res.status <= 299) {
                    router.go('/');
                }
            }).catch(() => modalError.openAndClose())
        }
        else {
            (<HTMLInputElement>inputFocusBlur[6]).focus();
        };
    };
};


function validEmail(this: HTMLElement, e: Event) {
    const inputPlaceholder = this.parentElement?.parentElement;
    if (e.type === 'focus') {
        inputPlaceholder?.classList.add('animation')
    } else if (e.type === 'blur') {
        if ((this as HTMLInputElement).value === '') {
            inputPlaceholder?.classList.remove('animation')
        };
        inputEmail.validEmail();
    };
};

function validationLogin(this: HTMLElement, e: Event) {
    const inputPlaceholder = this.parentElement?.parentElement;
    if (e.type === 'focus') {
        inputPlaceholder?.classList.add('animation')
    } else if (e.type === 'blur') {
        if ((this as HTMLInputElement).value === '') {
            inputPlaceholder?.classList.remove('animation');
        }
        inputlogin.validation();
    };
};

function validationName(this: HTMLElement, e: Event) {
    const inputPlaceholder = this.parentElement?.parentElement;
    if (e.type === 'focus') {
        inputPlaceholder?.classList.add('animation')
    } else if (e.type === 'blur') {
        if ((this as HTMLInputElement).value === '') {
            inputPlaceholder?.classList.remove('animation');
        };
        inputName.validation();
    };
};

function validationSecondName(this: HTMLElement, e: Event) {
    const inputPlaceholder = this.parentElement?.parentElement;
    if (e.type === 'focus') {
        inputPlaceholder?.classList.add('animation');
    } else if (e.type === 'blur') {
        if ((this as HTMLInputElement).value === '') {
            inputPlaceholder?.classList.remove('animation');
        };
        inputSecondName.validation();
    };
};

function validationPhone(this: HTMLElement, e: Event) {
    const inputPlaceholder = this.parentElement?.parentElement;
    if (e.type === 'focus') {
        inputPlaceholder?.classList.add('animation');
    } else if (e.type === 'blur') {
        if ((this as HTMLInputElement).value === '') {
            inputPlaceholder?.classList.remove('animation');
        };
        inputPhone.validPhone();
    };
};

function validationPassword(this: HTMLElement, e: Event) {
    const inputPlaceholder = this.parentElement?.parentElement;
    if (e.type === 'focus') {
        inputPlaceholder?.classList.add('animation');
    } else if (e.type === 'blur') {
        if ((this as HTMLInputElement).value === '') {
            inputPlaceholder?.classList.remove('animation');
        };
        inputPassword.validPassword();
    };
};

function validationPasswordToo(this: HTMLElement, e: Event) {
    const inputPlaceholder = this.parentElement?.parentElement;
    if (e.type === 'focus') {
        inputPlaceholder?.classList.add('animation')
    } else if (e.type === 'blur') {
        if ((this as HTMLInputElement).value === '') {
            inputPlaceholder?.classList.remove('animation')
        };
        inputPasswordToo.validPassword();
    };
};

export class Signin extends Block {
    render() {
        return template(pageInfo);
    };
    getComponent() {
        render('.btn-container', buttonAuth);
        render('.btn-container', buttonInfo);
        render('.input-container', inputWrapper);
        render('.email-enter', inputEmail);
        render('.login-enter', inputlogin);
        render('.first-name-enter', inputName);
        render('.second-name-enter', inputSecondName);
        render('.phone-enter', inputPhone);
        render('.password-enter', inputPassword);
        render('.password-too-enter', inputPasswordToo);
        render('main', modalError);
    };
};
