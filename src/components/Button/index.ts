import Handlebars from 'handlebars';
import { ButtonPropsType } from '@types';
import Block from '@block';
import { tpl } from './template';

class Button extends Block {
  constructor(localProps: ButtonPropsType) {
    super('div', localProps);
  }

  render() {
    const { infoElement } = this.props;
    const template = Handlebars.compile(tpl);
    return template(infoElement);
  }
}

export default Button;
