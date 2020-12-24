import { router } from './../../index.js';
import { render } from '../../utils/Render/index.js';
import Button from '../../components/Button/index.js';
import { pageInfoType } from '../../types/index.js';
import { tpl } from './template.js';
import Block from '../../utils/Block/index.js';
import { AuthService } from '../../services/index.js';
import UserData from '../../components/FormDataUser/index.js';

const infoElement: pageInfoType = {
    page: {
        title: 'Профиль',
    },
};



const changeData = new Button({
    className: "user-profile__data-profile__list",
    infoElement: {
        button:
        {
            type: 'button',
            className: 'user-profile__action__btn',
            text: 'Изменить данные',
        }
    },
    onClick: () => router.go('/changeprofile'),
});

const changePassword = new Button({
    className: "user-profile__data-profile__list",
    infoElement: {
        button:
        {
            type: 'button',
            className: 'user-profile__action__btn',
            text: 'Изменить пароль',
        }
    },
    onClick: () => router.go('/changepassword'),
});

const exitBtn = new Button({
    className: "user-profile__data-profile__list",
    infoElement: {
        button:
        {
            type: 'button',
            className: 'user-profile__action__exit-profile',
            text: 'Выйти',
        }
    },
    onClick: exitChat,
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

const userData = new UserData({
    infoElement: {
        user:
        {
            first_name: "",
            second_name: '',
            display_name: '',
            email: '',
            phone: '',
            login: ''

        }
    },
})

function exitChat() {
    AuthService.signOut().then((res: XMLHttpRequest) => {
        if (res.status === 200) {
            router.go('/auth')
        }
    })
}


export class Profile extends Block {
    render() {
        const template = Handlebars.compile(tpl);
        return template(infoElement);
    }
    getComponent() {
        render('.user-profile-data', userData);
        render('.user-profile__action', changeData);
        render('.user-profile__action', changePassword);
        render('.user-profile__action', exitBtn);
        render('.return-page', returnBtn);
        userData.getUserData()
    }
}