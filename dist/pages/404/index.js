import { tpl } from '../../templates/templatePageError.js';
import Block from '../../utils/Block/index.js';
const pageInfo = {
    "page": {
        title: '404',
        description: 'Не туда попали',
        goToHome: 'Назад к чатам',
    },
};
const template = Handlebars.compile(tpl);
export class Error extends Block {
    render() {
        return template(pageInfo);
    }
}
//# sourceMappingURL=index.js.map