import Handlebars from 'handlebars';
import Block from '@block';
import { PageInfoType } from '@types';
import { tpl } from '../../templates/templatePageError';

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
