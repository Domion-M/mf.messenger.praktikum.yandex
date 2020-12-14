import Block from '../../utils/Block/index.js';
import { tpl } from './template.js';
class InputWrapper extends Block {
    constructor(props) {
        super("div", props);
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
export default InputWrapper;
//# sourceMappingURL=index.js.map