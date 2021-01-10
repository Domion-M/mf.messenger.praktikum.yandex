import Handlebars from 'handlebars';
import { buttonPropsType } from '../../types';
import Block from '../../utils/Block';
import { tpl } from './template';

class Button extends Block {

    constructor(localProps: buttonPropsType) {
        super("div", localProps);
    };

    render() {
        const { infoElement } = this.props;
        const template = Handlebars.compile(tpl);
        return template(infoElement);
    };
};

export default Button;
