import Handlebars from 'handlebars';
import { FragmentPropsType } from '../../types';
import Block from '../../utils/Block';
import { tpl } from './template';

class Fragment extends Block {
  constructor(props: FragmentPropsType) {
    super('div', props);
  }

  render() {
    const { infoElement } = this.props;
    const template = Handlebars.compile(tpl);
    return template(infoElement);
  }
}

export default Fragment;
