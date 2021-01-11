export const tpl = `{{#each inputWrapper}}
{{#if placeholder}}        
<div class="login-and-signin-form__entry {{classInput}}">       
        <span class="{{className}}">{{placeholder}}</span>        
 </div>
    {{else}}
    <input class="input" type={{type}} name={{name}} />
{{/if}}
{{/each}}`;
