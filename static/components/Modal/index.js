import Block from '../Block/index.js';
class Modal extends Block {
    constructor(localProps) {
        super("div", localProps);
    }
    ;
    render() {
        const { infoElement } = this.props;
        const tpl = `{{#with modal}}        
        <div class="change-avatar__window-change-avatar">
            <h3>{{title}}</h3>
            <form action="/" method="POST" enctype="multipart/form-data" name="{{name}}">
                <label for="input__file" class="input_file_btn"><span>Выбирите файл на компьютере</span></label>
                <input type="file" name="avatar" id="input__file" class="input__file">
            </form> 
            <button class="general-btn log-array save-data" id="avatar" type="submit">Поменять</button> 
        </div>    
    {{/with}} `;
        const template = Handlebars.compile(tpl);
        return template(infoElement);
    }
    ;
}
;
export default Modal;
//# sourceMappingURL=index.js.map