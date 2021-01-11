import Handlebars from 'handlebars';
import { tpl } from '../../templates/templatePageError';
import { PageInfoType } from '../../types';

const pageInfo: PageInfoType = {
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
