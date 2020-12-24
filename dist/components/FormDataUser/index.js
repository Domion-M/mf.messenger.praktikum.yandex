import { UsersService } from '../../services/index.js';
import Block from '../../utils/Block/index.js';
import { tpl } from './template.tpl.js';
class UserData extends Block {
    constructor(localProps) {
        super("div", localProps);
    }
    ;
    render() {
        const { infoElement } = this.props;
        const template = Handlebars.compile(tpl);
        return template(infoElement);
    }
    ;
    getUserData() {
        UsersService.getAuthUser().then((res) => {
            const data = JSON.parse(res.response);
            this.setProps({
                infoElement: {
                    user: Object.assign({}, data)
                },
            });
        });
    }
}
;
export default UserData;
//# sourceMappingURL=index.js.map