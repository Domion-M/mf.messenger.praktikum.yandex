import { render } from '../../utils/Render/index.js';
import Button from '../../components/Button/index.js';
import { pageInfoType } from '../../types/index';

const pageInfo: pageInfoType = {
    page: {
        title: 'Профиль',
    },
};

const tpl = `
{{#with page}}
<main class="d-flex">
<div class="return-page">
</div>
<div class="wrap-page text-center">
    <div class="user-profile">
        <div class="user-profile__avatar">
            <div class="user-profile__data-profile">
               
            </div>
            <h3>Test</h3>
        </div>
        <div>
            <div class="user-profile__data-profile">
                <div class="user-profile__data-profile__list">
                    <div class="name-data">Почта</div>
                    <div class="chenge-data-user">yandex@ya.ru</div>
                </div>
                <div class="user-profile__data-profile__list">
                    <div class="name-data">Логин</div>
                    <div class="chenge-data-user">VasiaPupkin</div>
                </div>
                <div class="user-profile__data-profile__list">
                    <div class="name-data">Имя</div>
                    <div class="chenge-data-user">Алексей</div>
                </div>
                <div class="user-profile__data-profile__list">
                    <div class="name-data">Фамилия</div>
                    <div class="chenge-data-user">Алексеев</div>
                </div>
                <div class="user-profile__data-profile__list">
                    <div class="name-data">Имя в чате</div>
                    <div class="chenge-data-user">Бодрый</div>
                </div>
                <div class="user-profile__data-profile__list">
                    <div class="name-data">Телефон</div>
                    <div class="chenge-data-user">8 800 2000 600</div>
                </div>
            </div>
        </div>
        <div>
            <div class="user-profile__action">                
            </div>
        </div>
    </div>
</div>
</main>
{{/with}}`;

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
