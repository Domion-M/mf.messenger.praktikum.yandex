import { pageInfoType } from '../../types/index';

const pageInfo: pageInfoType = {
    "page":
    {
        title: '404',
        description: 'Не туда попали',
        goToHome: 'Назад к чатам',
    },
};

const tpl = `   {{#with page}}
<main class="wrap-page text-center">
    <div class="page-error">
        <h2 class="page-error__number">{{title}}</h2>
        <span class="page-error__text">{{description}}</span>
        <a href="../chats/" class="page-error__href">{{goToHome}}</a>
    </div>
</main>
{{/with}}`;

const root: Element | null = document.getElementById('root');
const template = Handlebars.compile(tpl);
if (root) {
    root.innerHTML = template(pageInfo);
}
