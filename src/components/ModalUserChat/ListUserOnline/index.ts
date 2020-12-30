import Handlebars from 'handlebars';
import { ChatsService } from '../../../services/index.js';
import { chatsList } from '../../../pages/chats/index.js';
import Block from '../../../utils/Block/index.js';
import { tpl } from './template.tpl.js';

class UserList extends Block {

    constructor(localProps: any) {
        super("div", localProps);
    };

    render() {
        const { infoElement } = this.props;
        (window as any).addToChat = (id: number) => {
            const data = {
                users: [id],
                chatId: chatsList.state.idChat
            }
            ChatsService.addChatUser(data)
        }
        const template = Handlebars.compile(tpl);
        return template(infoElement);
    };
    reRender(data: {}[]) {
        this.setProps({
            infoElement: {
                userlist: data
            }

        });
    };
};

export default UserList;