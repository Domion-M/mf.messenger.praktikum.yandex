import Handlebars from 'handlebars';
import Block from '@block';
import { ChatsService } from '@services';
import { chatsList, listDeleteUser, modalErrorChats } from '@pages';
import { tpl } from './template.tpl';

class DeleteUserToChat extends Block {
  constructor(localProps: any) {
    super('div', localProps);
  }

  render() {
    const { infoElement } = this.props;
    (window as any).deleteToChat = (id: number) => {
      const data = {
        users: [id],
        chatId: chatsList.state.idChat,
      };
      ChatsService.deleteChatUser(data).then(() => {
        ChatsService.getChatOnUsers(chatsList.state.idChat).then((resp: XMLHttpRequest) => {
          listDeleteUser.reRender(JSON.parse(resp.response));
        }).catch(() => modalErrorChats.openAndClose());
      });
    };
    const template = Handlebars.compile(tpl);
    return template(infoElement);
  }

  reRender(data: {}[]) {
    this.setProps({
      infoElement: {
        userlist: data,
      },
    });
  }
}

export default DeleteUserToChat;
