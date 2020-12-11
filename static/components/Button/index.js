import Block from '../../utils/Block/index.js';
class Button extends Block {
    constructor(localProps) {
        super("div", localProps);
    }
    ;
    render() {
        const { infoElement } = this.props;
        const tpl = `{{#with button}}
        <button type="{{type}}" 
        class="{{className}}" 
        id="{{id}}">{{text}}</button>
        {{/with}}`;
        const template = Handlebars.compile(tpl);
        return template(infoElement);
    }
    ;
}
;
export default Button;
//# sourceMappingURL=index.js.map