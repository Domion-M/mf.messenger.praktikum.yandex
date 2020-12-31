import { ChatsService } from '../../services/index.js';
import { router } from '../../index.js';
import Block from '../../utils/Block/index.js';
import { tpl } from './template.tpl.js';
class ChatsList extends Block {
    constructor(localProps) {
        super("div", localProps);
        this.state = {
            idChat: 0
        };
    }
    ;
    render() {
        const { infoElement } = this.props;
        window.choise = (id) => {
            this.state.idChat = id;
            this.activeChat(id);
        };
        const template = Handlebars.compile(tpl);
        return template(infoElement);
    }
    ;
    getChatsList() {
        ChatsService.getChatsUser().then((res) => {
            const data = JSON.parse(res.response);
            this.setProps({
                infoElement: {
                    userchats: data
                },
            });
        }).catch(() => router.go('/auth'));;
    }
    createChat(data) {
        ChatsService.createChats(data).then((res) => {
            if (res.status === 200) {
                this.getChatsList();
            }
        });
    }
    getAllChildrenChatList() {
        return this.content().children;
    }
    activeChat(id) {
        const child = this.getAllChildrenChatList();
        var child_as_arr = Array.from(child);
        child_as_arr.forEach((el) => {
            if (Number(el.id) === id) {
                el.classList.add('active');
            }
            else {
                el.classList.remove('active');
            }
        });
    }
    ;
    deleteChat() {
        if (!!this.state.idChat) {
            ChatsService.deleteChat({ chatId: this.state.idChat }).then((res) => {
                if (res.status === 200) {
                    this.getChatsList();
                }
            });
        }
    }
}
;
export default ChatsList;
//# sourceMappingURL=index.js.map