import Handlebars from 'handlebars';
import { fragmentPropsType } from '../../types/index.js';
import Block from '../../utils/Block/index.js';
import { tpl } from './template.js';

class Fragment extends Block {

    constructor(props: fragmentPropsType) {
        super("div", props);
    };

    render() {
        const { infoElement } = this.props;
        const template = Handlebars.compile(tpl);
        return template(infoElement);
    };

};

export default Fragment;
