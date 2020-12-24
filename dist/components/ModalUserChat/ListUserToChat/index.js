import { ChatsService } from '../../../services/index.js';
import { chatsList, listDeleteUser } from '../../../pages/chats/index.js';
import Block from '../../../utils/Block/index.js';
import { tpl } from './template.tpl.js';
class DeleteUserToChat extends Block {
    constructor(localProps) {
        super("div", localProps);
    }
    ;
    render() {
        const { infoElement } = this.props;
        window.deleteToChat = (id) => {
            const data = {
                users: [id],
                chatId: chatsList.state.idChat
            };
            ChatsService.deleteChatUser(data).then((res) => {
                if (res.status === 200) {
                    ChatsService.getChatOnUsers(chatsList.state.idChat).then((res) => {
                        listDeleteUser.reRender(JSON.parse(res.response));
                    });
                }
            });
        };
        const template = Handlebars.compile(tpl);
        return template(infoElement);
    }
    ;
    reRender(data) {
        this.setProps({
            infoElement: {
                userlist: data
            }
        });
    }
    ;
}
;
export default DeleteUserToChat;
//# sourceMappingURL=index.js.map