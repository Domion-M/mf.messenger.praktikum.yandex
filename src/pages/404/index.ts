import Handlebars from 'handlebars';
import { tpl } from '../../templates/templatePageError.js';
import { pageInfoType } from '../../types/index';

const pageInfo: pageInfoType = {
    "page":
    {
        title: '404',
        description: 'Не туда попали',
        goToHome: 'Назад к чатам',
    },
};

const root: Element | null = document.getElementById('root');
const template = Handlebars.compile(tpl);
if (root) {
    root.innerHTML = template(pageInfo);
}
