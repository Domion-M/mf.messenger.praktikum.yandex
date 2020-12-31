import { router } from './../../index.js';
import { render } from '../../utils/Render/index.js';
import Button from '../../components/Button/index.js';
import Modal from '../../components/Modal/index.js';
import Fragment from '../../components/Fragment/index.js';
import { tpl } from './tempalte.js';
import Block from '../../utils/Block/index.js';
import ChangeDateUser from '../../components/FormChangeUserData/index.js';
import ErrorModal from '../../components/ErrorModal/index.js';
const pageInfo = {
    page: {
        title: 'Вход',
    }
};
const template = Handlebars.compile(tpl);
const buttonSave = new Button({
    infoElement: {
        button: {
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
        button: {
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
        button: {
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
        button: {
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
});
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
    constructor(email, login, first_name, second_name, display_name, phone) {
        this.email = email;
        this.login = login;
        this.first_name = first_name;
        this.second_name = second_name;
        this.display_name = display_name;
        this.phone = phone;
        this.login = login;
        this.display_name = display_name;
        this.email = email;
        this.first_name = first_name;
        this.second_name = second_name;
        this.phone = phone;
    }
    ;
}
;
function openChengeAvatarModal() {
    const modalWindow = document.querySelector('.change-avatar ');
    modalWindow.style.display = 'flex';
}
;
function closeChengeAvatarModal() {
    const modalWindow = document.querySelector('.change-avatar ');
    modalWindow.style.display = 'none';
}
;
function saveDataUser(e) {
    e.preventDefault();
    const valueInputChange = document.querySelectorAll('.input-data');
    const userNewData = [];
    valueInputChange.forEach((el) => {
        if (el.value.trim() === '') {
            el.focus();
        }
        else {
            userNewData.push(el.value);
        }
        if (userNewData.length === valueInputChange.length) {
            const newDataUser = new UserData(userNewData[0], userNewData[1], userNewData[2], userNewData[3], userNewData[4], userNewData[5]);
            changeDataUser.changeUserProfile(newDataUser);
        }
        ;
    });
}
;
function changeAvatarUser(e) {
    e.preventDefault();
    const label = document.querySelector('.input_file_btn span');
    const input = document.querySelector('#input__file');
    const form = document.forms.namedItem('avatar-send');
    const title = document.querySelector('.change-avatar__window-change-avatar h3');
    if (form && input && title && label) {
        const val = input.value;
        if (val.trim() != '') {
            title.textContent = 'Файл загружен';
            const nameFile = val.slice(12);
            label.textContent = nameFile;
            const formData = new FormData(form);
            changeDataUser.changeUserAvatar(formData);
        }
        ;
    }
}
;
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
export const modalErrorProfile = new ErrorModal({
    className: "error-modal-window",
    infoElement: {
        error: {
            errorMessage: 'Что-то пошло не так'
        }
    }
});
export class ChangeProfile extends Block {
    render() {
        return template(pageInfo);
    }
    ;
    getComponent() {
        render('.user-avatar_action', fragAvatarmodal);
        render('.user-data_action', changeDataUser);
        render('.user-profile__action', buttonSave);
        render('.return-page', returnBtn);
        render('main', modal);
        render('.change-avatar__window-change-avatar', buttonModal);
        render('.change-avatar__window-change-avatar', buttonModalClose);
        render('main', modalErrorProfile);
        changeDataUser.getUserData();
    }
    ;
}
;
//# sourceMappingURL=index.js.map