export const tpl = `
<ul class="wrap-user-list">
{{#each userlist}}
<li id="{{id}}"><div class="add-to-chat" onclick="window.addToChat({{id}})"></div><div>{{first_name}} {{second_name}}</div></li>
{{/each}}
</ul>
`