import { render } from '../../utils/index.js';
import Button from '../../components/Button/index.js';
import { pageInfoType } from '../500/index.js';


const root: HTMLElement = document.getElementById('root');
const pageInfo: pageInfoType = {
    page: {
        title: 'Смена пороля',
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
        <div>
            <form action="/" method="POST">
                <div class="user-profile__data-profile">
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Старый пороль</div>
                        <div class="chenge-data-user"><input type="password" value="sicretKey"
                                name="oldPassword">
                        </div>
                    </div>
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Новый пароль</div>
                        <div class="chenge-data-user">
                            <input type="password" value="sicretKey" name="newPassword"></div>
                    </div>
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Поаторить новый пароль</div>
                        <div class="chenge-data-user"><input type="password" value="sicretKey"
                                name="newPasswordToo"></div>
                    </div>
                </div>
            </form>
        </div>
        <div>
            <div class="user-profile__action">
            </div>
        </div>
    </div>
</div>
</main>
{{/with}}`;

const template = Handlebars.compile(tpl);
root.innerHTML = template(pageInfo);

const buttonSave = new Button({
    infoElement: {
        button:
        {
            type: 'submit',
            className: 'general-btn log-array save-data',
            id: 'user-password',
            text: 'Сохранить'
        }
    }
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

