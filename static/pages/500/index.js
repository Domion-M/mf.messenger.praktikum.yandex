import Handlebars from 'handlebars';
const pageInfo = {
    page: {
        title: '500',
        description: 'Мы уже фиксим',
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
const root = document.getElementById('root');
const template = Handlebars.compile(tpl);
if (root) {
    root.innerHTML = template(pageInfo);
}
//# sourceMappingURL=index.js.map