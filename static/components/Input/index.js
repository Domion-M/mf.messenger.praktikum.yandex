import Block from '../../utils/Block/index.js';
class Input extends Block {
    constructor(props) {
        super("div", props);
    }
    ;
    render() {
        const { infoElement } = this.props;
        const tpl = `{{#each input}}
        {{#if placeholder}}        
        <div class="login-and-signin-form__entry">
                <input class="input" type={{type}} name={{name}} />
                <span class="{{className}}">{{placeholder}}</span>
                {{#if error}}
                <span class="login-and-signin-form__entry__error-valid">неверный логин</span>
                {{/if}}
         </div>
            {{else}}
            <input class="input" type={{type}} name={{name}} />
        {{/if}}
        {{/each}}`;
        const template = Handlebars.compile(tpl);
        return template(infoElement);
    }
    ;
}
;
export default Input;
//# sourceMappingURL=index.js.map