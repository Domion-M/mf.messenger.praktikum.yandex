import Handlebars from 'handlebars';
import { render } from '../../utils/Render/index.js';
import Button from '../../components/Button/index.js';
import { pageInfoType } from '../../types/index';
import { tpl } from './template.js';


const pageInfo: pageInfoType = {
    page: {
        title: 'Смена пороля',
    }
};

const root: HTMLElement | null = document.getElementById('root');
const template = Handlebars.compile(tpl);
if (root) {
    root.innerHTML = template(pageInfo);
}

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
    onClick: () => window.history.go(-1),
});

render('.user-profile__action', buttonSave);
render('.return-page', returnBtn);

class UserData {
    constructor(
        public old_password: string,
        public new_password: string,
        public new_password_too: string) {
        this.old_password = old_password;
        this.new_password = new_password;
        this.new_password_too = new_password_too;
    };

    checkPass() {
        if (this.new_password === this.new_password_too) {
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
            console.log(passwordNew);
            console.log(passwordNew.checkPass());
        };
    });
};
