import Handlebars from 'handlebars';
import Block from '@block';
import { tpl } from './template';

type ModalProps = {
  infoElement: {
    modal: {
      title: string;
      name: string;
    }
  },
  className?: string;
  onClick?: () => void;
};

class Modal extends Block {
  constructor(localProps: ModalProps) {
    super('div', localProps);
  }

  render() {
    const { infoElement } = this.props;
    const template = Handlebars.compile(tpl);
    return template(infoElement);
  }
}

export default Modal;
