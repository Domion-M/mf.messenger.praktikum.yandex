import { render } from '../../utils/Render/index.js';
import Button from '../../components/Button/index.js';
import Fragment from '../../components/Fragment/index.js';
import Input from '../../components/Input/index.js';
import { tpl } from './template.js';
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
        input: {
            name: 'message',
            type: 'text',
        },
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
class Message {
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
        const userMessage = new Message(inputMessage.value, [time, day]);
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