import { router } from './../../index.js';
import { render } from '../../utils/Render/index.js';
import Button from '../../components/Button/index.js';
import Modal from '../../components/Modal/index.js';
import Fragment from '../../components/Fragment/index.js';
import { pageInfoType } from '../../types/index';
import { tpl } from './tempalte.js';
import Block from '../../utils/Block/index.js';
import ChangeDateUser from '../../components/FormChangeUserData/index.js';

const pageInfo: pageInfoType = {
    page: {
        title: 'Вход',
    }
};

const template = Handlebars.compile(tpl);

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

const buttonModal = new Button({
    infoElement: {
        button:
        {
            type: 'submit',
            className: 'general-btn log-array save-data',
            id: 'avatar',
            text: 'Поменять',
        },
    },
    onClick: changeAvatarUser,
});

const buttonModalClose = new Button({
    infoElement: {
        button:
        {
            type: 'button',
            className: 'close-modal-btn',
            id: 'close',
            text: 'X',
        },
    },
    onClick: closeChengeAvatarModal,
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

const modal = new Modal({
    className: "change-avatar",
    infoElement: {
        modal: {
            title: 'Загрузите файл',
            name: 'avatar'
        },
    }
})

const fragAvatarmodal = new Fragment({
    className: "change-avatar-user",
    infoElement: {
        fragment: {
            text: "Поменять аватар"
        }
    },
    onClick: openChengeAvatarModal,
});


class UserData {
    constructor(
        public email: string,
        public login: string,
        public first_name: string,
        public second_name: string,
        public display_name: string,
        public phone: string) {
        this.login = login;
        this.display_name = display_name;
        this.email = email;
        this.first_name = first_name;
        this.second_name = second_name;
        this.phone = phone;
    };
};

function openChengeAvatarModal() {
    const modalWindow = document.querySelector('.change-avatar ');
    (<HTMLInputElement>modalWindow).style.display = 'flex';
};

function closeChengeAvatarModal() {
    const modalWindow = document.querySelector('.change-avatar ');
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
            changeDataUser.changeUserProfile(newDataUser)
        };
    });
};

function changeAvatarUser(e: Event) {
    e.preventDefault();
    const label = document.querySelector('.input_file_btn span');
    const input = document.querySelector('#input__file');
    const form = document.forms.namedItem('avatar-send');
    const title = document.querySelector('.change-avatar__window-change-avatar h3');
    if (form && input && title && label) {
        const val = (<HTMLInputElement>input).value;
        if (val.trim() != '') {
            title.textContent = 'Файл загружен';
            const nameFile = val.slice(12);
            label.textContent = nameFile;
            const formData = new FormData(form);
            changeDataUser.changeUserAvatar(formData)
        };
    }
};

const changeDataUser = new ChangeDateUser({
    infoElement: {
        user: {
            first_name: '',
            second_name: '',
            display_name: '',
            email: '',
            phone: '',
            login: ''
        }
    }
});



export class ChangeProfile extends Block {
    render() {
        return template(pageInfo);
    };
    getComponent() {
        render('.user-avatar_action', fragAvatarmodal);
        render('.user-data_action', changeDataUser);
        render('.user-profile__action', buttonSave);
        render('.return-page', returnBtn);
        render('main', modal);
        render('.change-avatar__window-change-avatar', buttonModal);
        render('.change-avatar__window-change-avatar', buttonModalClose);
        changeDataUser.getUserData();
    };
};
