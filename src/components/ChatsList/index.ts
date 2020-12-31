import Handlebars from 'handlebars';
import { router } from '../../index.js';
import { ChatsService } from '../../services/index.js';
import Block from '../../utils/Block/index.js';
import { tpl } from './template.tpl.js';

class ChatsList extends Block {
    state: { idChat: number }
    constructor(localProps: any) {
        super("div", localProps);
        this.state = {
            idChat: 0
        }
    };

    render() {
        const { infoElement } = this.props;
        (window as any).choise = (id: number) => {
            this.state.idChat = id
            this.activeChat(id)

        }
        const template = Handlebars.compile(tpl);
        return template(infoElement);
    };

    getChatsList() {
        ChatsService.getChatsUser().then((res: XMLHttpRequest) => {
            const data = JSON.parse(res.response)
            this.setProps({
                infoElement: {
                    userchats: data
                },
            });
        }).catch(() => router.go('/auth'));
    };

    createChat(data: { title: string }) {
        ChatsService.createChats(data).then((res: XMLHttpRequest) => {
            if (res.status === 200) {
                this.getChatsList()
            }
        })
    }
    getAllChildrenChatList() {
        return this.content().children;
    }
    activeChat(id: number) {
        const child = this.getAllChildrenChatList()
        var child_as_arr = Array.from(child);
        child_as_arr.forEach((el) => {
            if (Number((el as HTMLElement).id) === id) {
                (el as HTMLElement).classList.add('active')
            } else {
                (el as HTMLElement).classList.remove('active')
            }
        });
    };
    deleteChat() {
        if (!!this.state.idChat) {
            ChatsService.deleteChat({ chatId: this.state.idChat }).then((res: XMLHttpRequest) => {
                if (res.status === 200) {
                    this.getChatsList()
                }
            })
        }

    }
};

export default ChatsList;