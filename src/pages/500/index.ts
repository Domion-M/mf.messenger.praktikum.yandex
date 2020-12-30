import Handlebars from 'handlebars';
import { tpl } from '../../templates/templatePageError.js';
import { pageInfoType } from '../../types/index';

const pageInfo: pageInfoType = {
    page: {
        title: '500',
        description: 'Мы уже фиксим',
        goToHome: 'Назад к чатам',
    },
};

const root: Element | null = document.getElementById('root');
const template = Handlebars.compile(tpl);
if (root) {
    root.innerHTML = template(pageInfo);
}
