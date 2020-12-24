import Handlebars from 'handlebars';
import { tpl } from '../../templates/templatePageError.js';
import { pageInfoType } from '../../types/index';
import Block from '../../utils/Block/index.js';

const pageInfo: pageInfoType = {
    "page":
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
