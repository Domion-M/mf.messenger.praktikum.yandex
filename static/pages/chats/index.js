import { render } from '../../utils/Render/index.js';
import Button from '../../components/Button/index.js';
import Fragment from '../../components/Fragment/index.js';
import Input from '../../components/Input/index.js';
const pageInfo = {
    page: {
        title: 'Chats',
        userchats: [
            {
                className: 'window-chat__select__list-chat__chat',
                nameChat: 'yandex',
                lastMessage: 'Вы успешно сдали 2-й спринт ',
                time: '10:43',
                newMessage: '1',
            },
            {
                className: 'window-chat__select__list-chat__chat',
                nameChat: 'practicum',
                lastMessage: 'ура ',
                time: '10:43',
                newMessage: '2',
            },
            {
                className: 'window-chat__select__list-chat__chat active',
                nameChat: 'Test',
                time: '10:43',
            },
            {
                className: 'window-chat__select__list-chat__chat',
                nameChat: 'My chat',
                time: '10:43',
            },
        ],
    },
};
const tpl = `
{{#with page}}
<main class="wrap-page">
<div class="window-chat">
    <aside class="window-chat__select">
        <div class="window-chat__select__head">
            <div class="profile-wrap"></div>
            <div class="search"><input type="text">
                <span>Поиск</span>
            </div>
        </div>
        <ul class="window-chat__select__list-chat">
        {{#each userchats}}
            <li class="{{className}}">
                <div class="img"><span class="img-chat"></span></div>
                <div class="info">
                    <p class="name-chat">{{nameChat}}</p>
                    <span class="last-message">{{lastMessage}}</span>
                </div>
                <time class="date">{{time}}</time>
                {{#if newMessage}}
                <div class="alert-message">{{newMessage}}</div>
                {{/if}}
            </li>
           {{/each}}
        </ul>
    </aside>
    <div class="window-chat__message">
        <div class="window-chat__message__wrap">
            <nav class="window-chat__message__head-chat">
                <div class="chat-img"><span></span> Test</div>                
            </nav>
            <div class="window-chat__message__wrap__modal-menu">
                <div class="menu-list-action">
                    <div></div><span>Добавить пользователя</span>
                </div>
                <div class="menu-list-action">
                    <div class="menu-list-action__delete"></div><span>Удалить пользователя</span>
                </div>
                <div class="menu-list-action">
                    <div class="menu-list-action__delete delete"></div><span>Удалить чат</span>
                </div>
            </div>
            <div class="window-chat__message__body-chat">
                <div class="compamion-message">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse illum ex laboriosam
                        reiciendis aspernatur cupiditate delectus recusandae fuga quis magni, deserunt
                        voluptates labore et harum veniam dignissimos architecto facilis?
                    </p>
                </div>
                <div class="compamion-message">
                    <p>ok</p>
                </div>
                <div class="your-massege">
                    <p>Ок, я проверю</p>
                </div>
            </div>
            <form action="/" method="POST">
                <div class="window-chat__message__send-message">
                    <div class="load-file"><img src="./img/clip.png" alt="clip"></div>
                    <div class="send-mail"></div>                    
                </div>
            </form>
        </div>
    </div>
</div>
</main>
{{/with}}`;
const root = document.querySelector('#root');
const template = Handlebars.compile(tpl);
if (root) {
    root.innerHTML = template(pageInfo);
}
const sendMail = new Button({
    className: "send-btn-mail",
    infoElement: {
        button: {
            type: 'submit',
        }
    },
    onClick: sendMailChat,
});
const btnProfile = new Fragment({
    className: "profile",
    infoElement: {
        fragment: {
            text: "Профиль",
        }
    },
    onClick: () => document.location.href = '../profile',
});
const ctnMenuChat = new Fragment({
    className: "chat-menu",
    infoElement: {
        fragment: {
            text: ''
        },
    },
    onClick: openModalMenu,
});
const inputLogin = new Input({
    infoElement: {
        input: [
            {
                name: 'message',
                type: 'text',
            },
        ],
    },
});
render('.window-chat__message__send-message', sendMail);
render('.profile-wrap', btnProfile);
render('.window-chat__message__head-chat', ctnMenuChat);
render('.send-mail', inputLogin);
function openModalMenu() {
    this.classList.toggle('active');
    const modalMenu = document.querySelector('.window-chat__message__wrap__modal-menu');
    if (modalMenu)
        modalMenu.classList.toggle('display');
}
;
const inputMessage = document.querySelector('input[name="message"]');
class Massage {
    constructor(message, date) {
        this.message = message;
        this.date = date;
    }
}
;
function sendMailChat(e) {
    e.preventDefault();
    if (inputMessage.value.trim() !== '') {
        const date = new Date();
        const day = date.getDay();
        const minutes = date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes();
        const time = `${date.getHours()}:${minutes}`;
        const userMessage = new Massage(inputMessage.value, [time, day]);
        inputMessage.value = '';
        inputMessage.focus();
        console.log(userMessage);
    }
    else {
        inputMessage.focus();
    }
}
;
function sendMailKeyboardEnter(e) {
    if (e.code === 'Enter') {
        e.preventDefault();
        sendMailChat(e);
    }
}
if (inputMessage)
    inputMessage.addEventListener('keydown', sendMailKeyboardEnter);
//# sourceMappingURL=index.js.map