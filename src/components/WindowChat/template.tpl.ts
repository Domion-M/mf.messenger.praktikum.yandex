export const tpl = `
{{#each chatsMessage}}
{{#if user_id}}
<div class="your-massege">
                    <p>{{content}}</p>
                </div>

  {{else}}
  <div class="compamion-message">
  <p>{{content}}
  </p>
</div>
                {{/if}}
  {{/each}}
`;
