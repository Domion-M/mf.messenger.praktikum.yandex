import { tpl } from '../../templates/templatePageError.js';
const pageInfo = {
    "page": {
        title: '404',
        description: 'Не туда попали',
        goToHome: 'Назад к чатам',
    },
};
const root = document.getElementById('root');
const template = Handlebars.compile(tpl);
if (root) {
    root.innerHTML = template(pageInfo);
}
//# sourceMappingURL=index.js.map