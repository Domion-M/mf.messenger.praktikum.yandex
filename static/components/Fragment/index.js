import Block from '../../utils/Block/index.js';
class Fragment extends Block {
    constructor(props) {
        super("div", props);
    }
    ;
    render() {
        const { infoElement } = this.props;
        const tpl = `{{#with fragment}}
        <span>{{text}}</span>
    {{/with}}`;
        const template = Handlebars.compile(tpl);
        return template(infoElement);
    }
    ;
}
;
export default Fragment;
//# sourceMappingURL=index.js.map