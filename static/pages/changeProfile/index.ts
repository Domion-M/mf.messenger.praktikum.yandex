import { render } from '../../utils/index.js';
import Button from '../../components/Button/index.js';
import Modal from '../../components/Modal/index.js';
import Fragment from '../../components/Fragment/index.js';
import { pageInfoType } from '../500/index.js';

const pageInfo: pageInfoType = {
    page: {
        title: 'Вход',
    }
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
        <form action="/" method="POST">
            <div>
                <div class="user-profile__data-profile">
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Почта</div>
                        <div class="chenge-data-user"><input type="text" value="yandex@ya.ru" name="email">
                        </div>
                    </div>
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Логин</div>
                        <div class="chenge-data-user"><input type="text" value="VasiaPupkin" name="login"></div>
                    </div>
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Имя</div>
                        <div class="chenge-data-user"><input type="text" value="Алексей" name="first_name">
                        </div>
                    </div>
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Фамилия</div>
                        <div class="chenge-data-user"><input type="text" value="Алексеев" name="second_name">
                        </div>
                    </div>
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Имя в чате</div>
                        <div class="chenge-data-user"><input type="text" value="Бодрый" name="display_name">
                        </div>
                    </div>
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Телефон</div>
                        <div class="chenge-data-user">
                            <input type="text" value="8 800 2000 600" name="phone">
                        </div>
                    </div>
                </div>
            </div>
            <div>
        </form>
        <div class="user-profile__action">
        </div>
    </div>
</div>
</div>
</main>
{{/with}}`;

const root: HTMLElement = document.getElementById('root');
const template = Handlebars.compile(tpl);
root.innerHTML = template(pageInfo);

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

const dotClickModalWindow = document.querySelector('.change-avatar__window-change-avatar');
dotClickModalWindow.addEventListener('click', e => e.stopPropagation());

function openChengeAvatarModal() {
    const modal = document.querySelector('.change-avatar ');
    (<HTMLInputElement>modal).style.display = 'flex';
};

function closeChengeAvatarModal() {
    const modal = document.querySelector('.change-avatar ');
    (<HTMLInputElement>modal).style.display = 'none';
};
