import Handlebars from 'handlebars';
import Block from '@block';
import { tpl } from './template.tpl';

class ModalAddUserChat extends Block {
  open: boolean;

  constructor(localProps: any) {
    super('div', localProps);
    this.open = false;
  }

  render() {
    const { infoElement } = this.props;
    const template = Handlebars.compile(tpl);
    return template(infoElement);
  }

  openAndClose() {
    if (this.open) {
      this.content().classList.remove('display');
      this.open = false;
    } else {
      this.content().classList.add('display');
      this.open = true;
    }
  }
}

export default ModalAddUserChat;
