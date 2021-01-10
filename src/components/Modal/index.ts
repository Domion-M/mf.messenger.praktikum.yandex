import Handlebars from 'handlebars';
import Block from '../../utils/Block';
import { tpl } from './template';

type modalProps = {
    infoElement: {
        modal: {
            title: string;
            name: string;
        }
    },
    className?: string;
    onClick?: () => void;
}

class Modal extends Block {

    constructor(localProps: modalProps) {
        super("div", localProps);
    };

    render() {
        const { infoElement } = this.props;
        const template = Handlebars.compile(tpl);
        return template(infoElement);
    };

};

export default Modal;
