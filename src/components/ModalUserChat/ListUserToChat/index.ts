import Handlebars from 'handlebars';
import { ChatsService } from '../../../services';
import { chatsList, listDeleteUser, modalErrorChats } from '../../../pages/chats';
import Block from '../../../utils/Block';
import { tpl } from './template.tpl';

class DeleteUserToChat extends Block {

    constructor(localProps: any) {
        super("div", localProps);
    };

    render() {
        const { infoElement } = this.props;
        (window as any).deleteToChat = (id: number) => {
            const data = {
                users: [id],
                chatId: chatsList.state.idChat
            }
            ChatsService.deleteChatUser(data).then((res: XMLHttpRequest) => {
                if (res.status === 200) {
                    ChatsService.getChatOnUsers(chatsList.state.idChat).then((res: XMLHttpRequest) => {
                        listDeleteUser.reRender(JSON.parse(res.response))
                    }).catch(() => modalErrorChats.openAndClose())
                }
            })

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

export default DeleteUserToChat;