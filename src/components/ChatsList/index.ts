import Handlebars from 'handlebars';
import Block from '@block';
import { router } from '@router';
import { userData } from '@pages';
import { ChatsService } from '@services';
import { Ws } from '../../services/WebSokect';
import { tpl } from './template.tpl';

class ChatsList extends Block {
  state: {
    idChat: number,
    tokenChat:string,
    ws:Ws|null
  };

  constructor(localProps: any) {
    super('div', localProps);
    this.state = {
      idChat: 0,
      tokenChat: '',
      ws: null,
    };
  }

  render() {
    const { infoElement } = this.props;
    (window as any).choise = (id: number) => {
      this.state.idChat = id;
      this.getToken(id);
      this.activeChat(id);
    };
    const template = Handlebars.compile(tpl);
    return template(infoElement);
  }

  getChatsList() {
    ChatsService.getChatsUser().then((res: XMLHttpRequest) => {
      const data = JSON.parse(res.response);
      this.setProps({
        infoElement: {
          userchats: data,
        },
      });
    }).catch(() => router.go('/auth'));
  }

  createChat(data: { title: string }) {
    ChatsService.createChats(data).then(() => {
      this.getChatsList();
    });
  }

  getToken(id:number) {
    ChatsService.getChatChoise(id).then((res: XMLHttpRequest) => {
      const data = JSON.parse(res.response);
      this.state.tokenChat = data.token;
      this.state.ws = new Ws(userData.data.id!, this.state.idChat, data.token);
      this.state.ws.connect();
    });
  }

  getAllChildrenChatList() {
    return this.content().children;
  }

  activeChat(id: number) {
    const child = this.getAllChildrenChatList();
    const childAsArr = Array.from(child);
    childAsArr.forEach((el) => {
      if (Number((el as HTMLElement).id) === id) {
        (el as HTMLElement).classList.add('active');
      } else {
        (el as HTMLElement).classList.remove('active');
      }
    });
  }

  deleteChat() {
    if (this.state.idChat) {
      ChatsService.deleteChat({ chatId: this.state.idChat }).then(() => {
        this.getChatsList();
      });
    }
  }
}

export default ChatsList;
