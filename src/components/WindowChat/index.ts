import Handlebars from 'handlebars';
import { userData } from '../../pages/profile';
import Block from '../../utils/Block';
import { tpl } from './template.tpl';

type WindowChatType = {
  className?: string;
  infoElement: {
    chatsMessage: {
      id?: number;
      user_id?: number;
      content?: string;
    }[],
  },
  onClick?: (e: any) => void;
};

class WindowChat extends Block {
  messages: {}[];

  constructor(localProps: WindowChatType) {
    super('div', localProps);
    this.messages = [];
  }

  render() {
    const { infoElement }:any = this.props;
    const a = infoElement.chatsMessage.map((el:any) => {
      if (el.userId === userData.data.id) {
        // eslint-disable-next-line no-param-reassign
        el.user_id = true;
      } else if (el.user_id !== userData.data.id) {
        // eslint-disable-next-line no-param-reassign
        el.user_id = false;
      }
      return el;
    });
    infoElement.chatsMessage = a;
    const template = Handlebars.compile(tpl);
    return template(infoElement);
  }

  updateMessage(data:[]|{}) {
    if (Array.isArray(data)) {
      this.messages = data.sort((a:{id:number}, b:{id:number}) => b.id - a.id);
    } else if (data instanceof Object) {
      this.messages.push(data);
    }
    this.setProps({
      infoElement: {
        chatsMessage: this.messages,
      },
    });
  }
}

export default WindowChat;
