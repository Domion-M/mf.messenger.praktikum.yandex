import Handlebars from 'handlebars';
import { router } from './../../';
import { render } from '../../utils/Render';
import Button from '../../components/Button';
import Fragment from '../../components/Fragment';
import Input from '../../components/Input';
import { tpl } from './template';
import Block from '../../utils/Block';
import ChatsList from '../../components/ChatsList';
import ModalAddUserChat from '../../components/ModalUserChat';
import { ChatsService, UsersService } from '../../services';
import UserList from '../../components/ModalUserChat/ListUserOnline';
import DeleteUserToChat from '../../components/ModalUserChat/ListUserToChat';
import ErrorModal from '../../components/ErrorModal';

type ChatsPropsType = {
    page: {
        title: string;
    }
}

export const listDeleteUser = new DeleteUserToChat({})
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
    inClick: openModalMenu,
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

const inputMessage = new Input({
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

export const modalErrorChats = new ErrorModal({
    className: "error-modal-window",
    infoElement: {
        error: {
            errorMessage: 'Что-то пошло не так'
        }

    }
});

function getUserOnline(e: { target: { value: string; }; }) {
    UsersService.getAllUsersOnline({ login: e.target.value }).then((res: XMLHttpRequest) => {
        if (res.status === 200) {
            listUsersOnline.reRender(JSON.parse(res.response))
        }
    }).catch(() => modalErrorChats.openAndClose());
}

function headleAddUserChat() {
    modalAddUser.openAndClose()
    if (modalDeleteUser.open) {
        modalDeleteUser.openAndClose()
    }
}

function headleDeleteUserChat() {
    modalDeleteUser.openAndClose()
    if (modalAddUser.open) {
        modalAddUser.openAndClose()
    }
    const data = chatsList.state.idChat
    ChatsService.getChatOnUsers(data).then((res: XMLHttpRequest) => {
        listDeleteUser.reRender(JSON.parse(res.response))
    }).catch(() => modalErrorChats.openAndClose())
}

function openModalMenu(this: HTMLElement): void {
    if (chatsList.state.idChat) {
        this.classList.toggle('active');
        const modalMenu: HTMLElement | null = document.querySelector('.window-chat__message__wrap__modal-menu');
        if (modalMenu) modalMenu.classList.toggle('display');
    } else {
        alert('Выбирите чат!')
    }
};

function addNewChat() {
    let value = inputAddChat.getValue();
    if (value != '' && value.length > 4) {
        const chat = { title: value }
        chatsList.createChat(chat)
        inputAddChat.changeValue()
    } else {
        alert("Название чата больше 4 символов");
    }
}

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
    if (inputMessage.getValue().trim() !== '') {
        const date = new Date();
        const day = date.getDay();
        const minutes = date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes();
        const time = `${date.getHours()}:${minutes}`;
        const userMessage = new Message(inputMessage.getValue(), [time, day]);
        inputMessage.changeValue();
        inputMessage.getElement().focus();
        console.log(userMessage);
    } else {
        inputMessage.getElement().focus();
    };
};

function sendMailKeyboardEnter(e: any): void {
    if (e.code === 'Enter') {
        e.preventDefault();
        sendMailChat(e);
    };
}
inputMessage.getElement().addEventListener('keydown', sendMailKeyboardEnter);

export class Chats extends Block {
    render() {
        const template = Handlebars.compile(tpl);
        return template(pageInfo);
    };
    getComponent() {
        render('.window-chat__message__send-message', sendMail);
        render('.profile-wrap', btnProfile);
        render('.window-chat__message__head-chat', ctnMenuChat);
        render('.send-mail', inputMessage);
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
        render('main', modalErrorChats);
        chatsList.getChatsList()
    }
};
