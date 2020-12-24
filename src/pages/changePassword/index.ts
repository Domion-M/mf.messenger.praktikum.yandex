import { router } from './../../index.js';
import { render } from '../../utils/Render/index.js';
import Button from '../../components/Button/index.js';
import { pageInfoType } from '../../types/index';
import { tpl } from './template.js';
import Block from '../../utils/Block/index.js';
import ChangePasswordUser from '../../components/FormChangePassword/index.js';


const pageInfo: pageInfoType = {
    page: {
        title: 'Смена пороля',
    }
};

const template = Handlebars.compile(tpl);

const buttonSave = new Button({
    infoElement: {
        button:
        {
            type: 'submit',
            className: 'general-btn log-array save-data',
            id: 'user-password',
            text: 'Сохранить'
        }
    },
    onClick: saveNewPassword,
});

const returnBtn = new Button({
    infoElement: {
        button:
        {
            type: 'button',
            className: 'return-page__return-btn',
        }
    },
    onClick: () => router.back(),
});

class UserData {
    constructor(
        public oldPassword: string,
        public newPassword: string,
        public newPasswordToo: string) {
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
        this.newPasswordToo = newPasswordToo;
    };

    checkPass() {
        if (this.newPassword === this.newPasswordToo) {
            return true;
        } else {
            return false;
        };
    };
};

function saveNewPassword(e: Event) {
    e.preventDefault();
    const newPassword = document.querySelectorAll('input');
    const password: Array<string> = [];
    newPassword.forEach(el => {
        if ((<HTMLInputElement>el).value.trim() === '') {
            (<HTMLInputElement>el).focus();
        } else {
            password.push((<HTMLInputElement>el).value);
        }
        if (password.length === newPassword.length) {
            const passwordNew = new UserData(password[0], password[1], password[2])
            if (passwordNew.checkPass()) {
                changePasswordForm.changeUserPassword({
                    oldPassword: passwordNew.oldPassword,
                    newPassword: passwordNew.newPassword
                })
            }
        };
    });
};

const changePasswordForm = new ChangePasswordUser({
    infoElement: {
        user: {
            oldPassword: '',
            newPassword: '',
            newPasswordToo: ''
        }
    }
});

export class ChangePassword extends Block {
    render() {
        return template(pageInfo);
    }
    getComponent() {
        render('.user-profile__action', buttonSave);
        render('.return-page', returnBtn);
        render('.change-password-action', changePasswordForm);
    }
};
