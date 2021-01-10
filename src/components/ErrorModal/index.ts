import Handlebars from 'handlebars';
import Block from '../../utils/Block';
import { tpl } from './template.tpl';

type ErrorModalProps = {
    infoElement: {
        error: {
            errorMessage: string
        }
    },
    className?: string;
}

class ErrorModal extends Block {

    constructor(localProps: ErrorModalProps) {
        super("div", localProps);
    };
    render() {
        const { infoElement } = this.props;
        const template = Handlebars.compile(tpl);
        return template(infoElement);
    };
    openAndClose() {
        this.content().style.display = 'block';
        setTimeout(() => {
            this.content().style.display = 'none';
        }, 3000)
    }
};

export default ErrorModal;
