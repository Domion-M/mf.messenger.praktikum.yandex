import Block from '../../utils/Block/index.js';
import { tpl } from './template.js';

type inputPropsType = {
    infoElement: {
        className?: string;
        inputWrapper: {
            placeholder?: string;
            error?: boolean;
            className?: string;
            classInput?: string
        }[],
    }
}

class InputWrapper extends Block {

    constructor(props: inputPropsType) {
        super("div", props);
    };

    render() {
        const { infoElement } = this.props;
        const template = Handlebars.compile(tpl);
        return template(infoElement);
    };

};

export default InputWrapper;

