export const tpl = `{{#with modal}}        
<div class="change-avatar__window-change-avatar">
    <h3>{{title}}</h3>
    <form action="/api/v2/uploads/" method="PUT" enctype="multipart/form-data" name="avatar-send">
        <label for="input__file" class="input_file_btn"><span>Выбирите файл на компьютере</span></label>
        <input type="file" name="{{name}}" id="input__file" class="input__file">
    </form> 
</div>    
{{/with}} `;
//# sourceMappingURL=template.js.map