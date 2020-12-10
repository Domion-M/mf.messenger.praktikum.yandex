import Block from '../Block/index.js';

type fragmentPropsType = {
    className?: string;
    infoElement: {
        fragment: {
            text?: string
        }
    },
    onClick: () => void;
}

class Fragment extends Block {

    constructor(props: fragmentPropsType) {
        super("div", props);
    };

    render() {
        const { infoElement } = this.props
        const tpl = `{{#with fragment}}
        <span>{{text}}</span>
    {{/with}}`;

        const template = Handlebars.compile(tpl);
        return template(infoElement);
    };

};

export default Fragment;
