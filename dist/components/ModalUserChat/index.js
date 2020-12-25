import Block from '../../utils/Block/index.js';
import { tpl } from './template.tpl.js';
class ModalAddUserChat extends Block {
    constructor(localProps) {
        super("div", localProps);
        this.open = false;
    }
    ;
    render() {
        const { infoElement } = this.props;
        const template = Handlebars.compile(tpl);
        return template(infoElement);
    }
    ;
    openAndClose() {
        if (this.open) {
            this.content().classList.remove('display');
            this.open = false;
        }
        else {
            this.content().classList.add('display');
            this.open = true;
        }
    }
}
;
export default ModalAddUserChat;
//# sourceMappingURL=index.js.map