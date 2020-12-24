export const tpl = `{{#with input}}
    <input class="input {{className}} {{active}}" type="{{type}}" name="{{name}}" value="{{value}}" placeholder="{{placeholder}}"/>
    {{#if error}}
        <span class="login-and-signin-form__entry__error-valid">Неверные данные</span>
        {{/if}}
{{/with}}`;
//# sourceMappingURL=template.js.map