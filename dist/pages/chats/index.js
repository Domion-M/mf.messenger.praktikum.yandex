import { router } from './../../index.js';
import { render } from '../../utils/Render/index.js';
import Button from '../../components/Button/index.js';
import Fragment from '../../components/Fragment/index.js';
import Input from '../../components/Input/index.js';
import { tpl } from './template.js';
import Block from '../../utils/Block/index.js';
import ChatsList from '../../components/ChatsList/index.js';
import ModalAddUserChat from '../../components/ModalUserChat/index.js';
import { ChatsService, UsersService } from '../../services/index.js';
import UserList from '../../components/ModalUserChat/ListUserOnline/index.js';
import DeleteUserToChat from '../../components/ModalUserChat/ListUserToChat/index.js';
export const listDeleteUser = new DeleteUserToChat({});
export const chatsList = new ChatsList({
    infoElement: {
        userchats: []
    }
});
const pageInfo = {
    page: {
        title: 'Chats',
    },
};
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
    className: 'profile',
    infoElement: {
        fragment: {
            text: "Профиль",
        }
    },
    onClick: () => router.go('/profile'),
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
const deleteChat = new Fragment({
    infoElement: {
        fragment: {
            text: 'Удалить чат'
        },
    },
    onClick: () => chatsList.deleteChat(),
});
const addUserChat = new Fragment({
    infoElement: {
        fragment: {
            text: 'Добавить пользователя'
        },
    },
    onClick: headleAddUserChat,
});
const deleteUserChat = new Fragment({
    infoElement: {
        fragment: {
            text: 'Удалить пользователя'
        },
    },
    onClick: headleDeleteUserChat,
});
const inputLogin = new Input({
    infoElement: {
        input: {
            name: 'message',
            type: 'text',
        },
    },
});
const inputAddChat = new Input({
    infoElement: {
        input: {
            name: 'add-chat',
            type: 'text',
            className: 'add-chat__input',
            placeholder: 'Введите названия чата'
        },
    },
});
const createNewChat = new Button({
    className: "send-btn-mail",
    infoElement: {
        button: {
            className: "add-chat-btn",
            type: 'button',
            text: 'Создать новый чат'
        }
    },
    onClick: addNewChat,
});
const modalAddUser = new ModalAddUserChat({
    className: 'modal-add-user-chat',
    infoElement: {}
});
const modalDeleteUser = new ModalAddUserChat({
    className: 'modal-delete-user-chat',
    infoElement: {}
});
const inputAddUsers = new Input({
    infoElement: {
        input: {
            type: 'text',
            className: "search",
            placeholder: 'имя пользователя',
        }
    },
    onInput: getUserOnline
});
const listUsersOnline = new UserList({
    infoElement: {
        userlist: []
    }
});
function getUserOnline(e) {
    UsersService.getAllUsersOnline({ login: e.target.value }).then((res) => {
        if (res.status === 200) {
            listUsersOnline.reRender(JSON.parse(res.response));
        }
    });
}
function headleAddUserChat() {
    modalAddUser.openAndClose();
    if (modalDeleteUser.open) {
        modalDeleteUser.openAndClose();
    }
}
function headleDeleteUserChat() {
    modalDeleteUser.openAndClose();
    if (modalAddUser.open) {
        modalAddUser.openAndClose();
    }
    const data = chatsList.state.idChat;
    ChatsService.getChatOnUsers(data).then((res) => {
        listDeleteUser.reRender(JSON.parse(res.response));
    });
}
function openModalMenu() {
    if (chatsList.state.idChat) {
        this.classList.toggle('active');
        const modalMenu = document.querySelector('.window-chat__message__wrap__modal-menu');
        if (modalMenu)
            modalMenu.classList.toggle('display');
    }
    else {
        alert('Выбирите чат!');
    }
}
;
function addNewChat() {
    const value = inputAddChat.getValue();
    if (value != '' && value.length > 3) {
        const chat = { title: value };
        chatsList.createChat(chat);
    }
}
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
export class Chats extends Block {
    render() {
        const template = Handlebars.compile(tpl);
        return template(pageInfo);
    }
    getComponent() {
        render('.window-chat__message__send-message', sendMail);
        render('.profile-wrap', btnProfile);
        render('.window-chat__message__head-chat', ctnMenuChat);
        render('.send-mail', inputLogin);
        render('.add-chat-wrap', inputAddChat);
        render('.add-chat-wrap', createNewChat);
        render('.window-chat__select__list-chat', chatsList);
        render('.add-user', addUserChat);
        render('.delete-user', deleteUserChat);
        render('.delete-chat', deleteChat);
        render('.window-chat__message__wrap__modal-menu', modalAddUser);
        render('.window-chat__message__wrap__modal-menu', modalDeleteUser);
        render('.modal-add-user-chat', inputAddUsers);
        render('.modal-add-user-chat', listUsersOnline);
        render('.modal-delete-user-chat', listDeleteUser);
        chatsList.getChatsList();
    }
}
//# sourceMappingURL=index.js.map