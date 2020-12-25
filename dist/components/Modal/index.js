import Block from '../../utils/Block/index.js';
import { tpl } from './template.js';
class Modal extends Block {
    constructor(localProps) {
        super("div", localProps);
    }
    ;
    render() {
        const { infoElement } = this.props;
        const template = Handlebars.compile(tpl);
        return template(infoElement);
    }
    ;
    openAndClose() {
        console.log(this.content());
    }
}
;
export default Modal;
//# sourceMappingURL=index.js.map