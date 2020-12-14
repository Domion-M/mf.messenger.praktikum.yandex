import Handlebars from 'handlebars';
import { render } from '../../utils/Render/index.js';
import Button from '../../components/Button/index.js';
import Modal from '../../components/Modal/index.js';
import Fragment from '../../components/Fragment/index.js';
import { pageInfoType } from '../../types/index';
import { tpl } from './tempalte.js';

const pageInfo: pageInfoType = {
    page: {
        title: 'Вход',
    }
};

const root: HTMLElement | null = document.getElementById('root');
const template = Handlebars.compile(tpl);
if (root) root.innerHTML = template(pageInfo);


const buttonSave = new Button({
    infoElement: {
        button:
        {
            type: 'submit',
            className: 'general-btn log-array save-data',
            id: 'user-data',
            text: 'Сохранить',
        },
    },
    onClick: saveDataUser,
});

const returnBtn = new Button({
    infoElement: {
        button:
        {
            type: 'button',
            className: 'return-page__return-btn',
        }
    },
    onClick: () => window.history.go(-1)
});

const modal = new Modal({
    className: "change-avatar",
    infoElement: {
        modal: {
            title: 'Загрузите файл',
            name: 'avatar'
        },
    },
    onClick: closeChengeAvatarModal,
})

const fragAvatarmodal = new Fragment({
    className: "user-profile__data-profile__hover",
    infoElement: {
        fragment: {
            text: "Поменять аватар"
        }
    },
    onClick: openChengeAvatarModal,
});

render('.user-profile__action', buttonSave);
render('.return-page', returnBtn);
render('.user-profile__data-profile', fragAvatarmodal);
render('main', modal);

const dotClickModalWindow: HTMLElement | null = document.querySelector('.change-avatar__window-change-avatar');
const modalWindow = document.querySelector('.change-avatar ');
if (dotClickModalWindow) dotClickModalWindow.addEventListener('click', e => e.stopPropagation());

class UserData {
    constructor(
        public email: string,
        public login: string,
        public first_name: string,
        public second_name: string,
        public phone: string,
        public display_name: string) {
        this.login = login;
        this.display_name = display_name;
        this.email = email;
        this.first_name = first_name;
        this.second_name = second_name;
        this.phone = phone;
    };
};

function openChengeAvatarModal() {
    (<HTMLInputElement>modalWindow).style.display = 'flex';
};

function closeChengeAvatarModal() {
    (<HTMLInputElement>modalWindow).style.display = 'none';
};
function saveDataUser(e: Event) {
    e.preventDefault();
    const valueInputChange = document.querySelectorAll('.input-data');
    const userNewData: Array<string> = [];
    valueInputChange.forEach((el) => {
        if ((<HTMLInputElement>el).value.trim() === '') {
            (<HTMLInputElement>el).focus();
        } else {
            userNewData.push((<HTMLInputElement>el).value);
        }
        if (userNewData.length === valueInputChange.length) {
            const newDataUser = new UserData(userNewData[0], userNewData[1], userNewData[2], userNewData[3], userNewData[4], userNewData[5]);
            console.log(newDataUser);
        };
    });
};
