export const tpl = `
<ul class="wrap-user-list">
{{#each userlist}}
<li id="{{id}}"><div class="delete-to-chat" onclick="window.deleteToChat({{id}})"></div><div>{{first_name}} {{second_name}}</div></li>
{{/each}}
</ul>
`