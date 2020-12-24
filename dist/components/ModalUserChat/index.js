import Block from '../../utils/Block/index.js';
import { tpl } from './template.tpl.js';
class ModalAddUserChat extends Block {
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
    openAndCloose() {
        this.content().classList.toggle('display');
    }
}
;
export default ModalAddUserChat;
//# sourceMappingURL=index.js.map