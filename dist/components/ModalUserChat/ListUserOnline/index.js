import { ChatsService } from '../../../services/index.js';
import { chatsList } from '../../../pages/chats/index.js';
import Block from '../../../utils/Block/index.js';
import { tpl } from './template.tpl.js';
class UserList extends Block {
    constructor(localProps) {
        super("div", localProps);
    }
    ;
    render() {
        const { infoElement } = this.props;
        window.addToChat = (id) => {
            const data = {
                users: [id],
                chatId: chatsList.state.idChat
            };
            ChatsService.addChatUser(data);
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
export default UserList;
//# sourceMappingURL=index.js.map