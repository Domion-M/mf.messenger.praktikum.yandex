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

type ChatsPropsType = {
    page: {
        title: string;
    }
}
export const chatsList = new ChatsList({
    infoElement: {
        userchats: []
    }
})

const pageInfo: ChatsPropsType = {
    page: {
        title: 'Chats',
    },
};

const sendMail = new Button({
    className: "send-btn-mail",
    infoElement: {
        button:
        {
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
        input:
        {
            name: 'message',
            type: 'text',
        },

    },
});
const inputAddChat = new Input({
    infoElement: {
        input:
        {
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
        button:
        {
            className: "add-chat-btn",
            type: 'button',
            text: 'Создать новый чат'
        }
    },
    onClick: addNewChat,
});

const modalAddUser = new ModalAddUserChat({
    className: 'modal-add-user-chat',
    infoElement: {

    }
});

const modalDeleteUser = new ModalAddUserChat({
    className: 'modal-delete-user-chat',
    infoElement: {

    }
});
export const listDeleteUser = new DeleteUserToChat({

})

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
})

function getUserOnline(e: { target: { value: string; }; }) {
    UsersService.getAllUsersOnline({ login: e.target.value }).then((res: XMLHttpRequest) => {
        if (res.status === 200) {
            listUsersOnline.reRender(JSON.parse(res.response))
        }
    });
}

function headleAddUserChat() {
    modalAddUser.openAndCloose()
}

function headleDeleteUserChat() {
    modalDeleteUser.openAndCloose()
    const data = chatsList.state.idChat
    ChatsService.getChatOnUsers(data).then((res: XMLHttpRequest) => {
        console.log(JSON.parse(res.response));
        listDeleteUser.reRender(JSON.parse(res.response))
    })
}

function openModalMenu(): void {
    this.classList.toggle('active');
    const modalMenu: HTMLElement | null = document.querySelector('.window-chat__message__wrap__modal-menu');
    if (modalMenu) modalMenu.classList.toggle('display');
};

function addNewChat() {
    const value = inputAddChat.getValue();
    if (value != '' && value.length > 3) {
        const chat = { title: value }
        chatsList.createChat(chat)
    }
}

const inputMessage = document.querySelector('input[name="message"]');

class Message {
    message: String;
    date: [string, number];
    constructor(message: string, date: [string, number]) {
        this.message = message;
        this.date = date;
    }
};

function sendMailChat(e: any): void {
    e.preventDefault();
    if ((<HTMLInputElement>inputMessage).value.trim() !== '') {
        const date = new Date();
        const day = date.getDay();
        const minutes = date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes();
        const time = `${date.getHours()}:${minutes}`;
        const userMessage = new Message((<HTMLInputElement>inputMessage).value, [time, day]);
        (<HTMLInputElement>inputMessage).value = '';
        (<HTMLInputElement>inputMessage).focus();
        console.log(userMessage);
    }
    else {
        (<HTMLInputElement>inputMessage).focus();
    }
};

function sendMailKeyboardEnter(e: any): void {
    if (e.code === 'Enter') {
        e.preventDefault();
        sendMailChat(e);
    }
}
if (inputMessage) inputMessage.addEventListener('keydown', sendMailKeyboardEnter);

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
        chatsList.getChatsList()
    }
}
