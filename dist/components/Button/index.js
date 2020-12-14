import Block from '../../utils/Block/index.js';
import { tpl } from './template.js';
class Button extends Block {
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
}
;
export default Button;
//# sourceMappingURL=index.js.map