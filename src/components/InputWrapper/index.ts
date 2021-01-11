import Handlebars from 'handlebars';
import Block from '../../utils/Block';
import { tpl } from './template';

type InputPropsType = {
  infoElement: {
    className?: string;
    inputWrapper: {
      placeholder?: string;
      error?: boolean;
      className?: string;
      classInput?: string
    }[],
  }
};

class InputWrapper extends Block {
  constructor(props: InputPropsType) {
    super('div', props);
  }

  render() {
    const { infoElement } = this.props;
    const template = Handlebars.compile(tpl);
    return template(infoElement);
  }
}

export default InputWrapper;
