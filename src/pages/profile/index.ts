import Handlebars from 'handlebars';
import { render } from '../../utils/Render/index.js';
import Button from '../../components/Button/index.js';
import { pageInfoType } from '../../types/index';
import { tpl } from './template.js';

const pageInfo: pageInfoType = {
    page: {
        title: 'Профиль',
    },
};

const root: HTMLElement | null = document.getElementById('root');
const template = Handlebars.compile(tpl);
if (root) root.innerHTML = template(pageInfo);

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
    onClick: () => document.location.href = '../changeProfile',
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
    onClick: () => document.location.href = '../changePassword',
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
    onClick: () => document.location.href = '../login',
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

render('.user-profile__action', changeData);
render('.user-profile__action', changePassword);
render('.user-profile__action', exitBtn);
render('.return-page', returnBtn);
