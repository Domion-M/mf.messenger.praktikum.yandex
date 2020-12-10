import Block from '../Block/index.js';

type buttonPropsType = {
    className?: string;
    infoElement: {
        button: {
            type: string;
            className?: string;
            id?: string;
            text?: string;
        },
    },
    onClick?: (e: any) => void;
};

class Button extends Block {

    constructor(localProps: buttonPropsType) {
        super("div", localProps);
    };

    render() {
        const { infoElement } = this.props;

        const tpl = `{{#with button}}
        <button type="{{type}}" 
        class="{{className}}" 
        id="{{id}}">{{text}}</button>
        {{/with}}`;

        const template = Handlebars.compile(tpl);
        return template(infoElement);
    };
};

export default Button;
