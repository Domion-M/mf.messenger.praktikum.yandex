import { render } from '../../utils/Render/index.js';
import Button from '../../components/Button/index.js';
import Modal from '../../components/Modal/index.js';
import Fragment from '../../components/Fragment/index.js';
import { tpl } from './tempalte.js';
const pageInfo = {
    page: {
        title: 'Вход',
    }
};
const root = document.getElementById('root');
const template = Handlebars.compile(tpl);
if (root)
    root.innerHTML = template(pageInfo);
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
const returnBtn = new Button({
    infoElement: {
        button: {
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
});
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
const dotClickModalWindow = document.querySelector('.change-avatar__window-change-avatar');
const modalWindow = document.querySelector('.change-avatar ');
if (dotClickModalWindow)
    dotClickModalWindow.addEventListener('click', e => e.stopPropagation());
class UserData {
    constructor(email, login, first_name, second_name, phone, display_name) {
        this.email = email;
        this.login = login;
        this.first_name = first_name;
        this.second_name = second_name;
        this.phone = phone;
        this.display_name = display_name;
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
    modalWindow.style.display = 'flex';
}
;
function closeChengeAvatarModal() {
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
            console.log(newDataUser);
        }
        ;
    });
}
;
//# sourceMappingURL=index.js.map