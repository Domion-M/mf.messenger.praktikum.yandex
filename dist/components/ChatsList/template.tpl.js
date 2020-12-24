export const tpl = `
{{#each userchats}}
            <li class="window-chat__select__list-chat__chat" onclick="window.choise({{id}})" id="{{id}}">
                <div class="img"><span class="img-chat"></span></div>
                <div class="info">
                    <p class="name-chat">{{title}}</p>
                    <span class="last-message">{{lastMessage}}</span>
                </div>
                <time class="date">{{time}}</time>
                {{#if newMessage}}
                <div class="alert-message">{{newMessage}}</div>
                {{/if}}
            </li>
           {{/each}}
`;
//# sourceMappingURL=template.tpl.js.map