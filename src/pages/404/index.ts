import Handlebars from 'handlebars';
import { tpl } from '../../templates/templatePageError';
import { PageInfoType } from '../../types';
import Block from '../../utils/Block';

const pageInfo: PageInfoType = {
  page:
    {
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
