import { UsersService } from '../../services/index.js';
import Block from '../../utils/Block/index.js';
import { tpl } from './template.tpl.js';
class ChangeDateUser extends Block {
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
    changeUserProfile(newDataUser) {
        UsersService.changeUserProfile(newDataUser).then((res) => {
            if (res)
                this.getUserData();
        });
    }
    changeUserAvatar(avatar) {
        UsersService.changeUserAvatar(avatar).then((res) => {
            if (res)
                this.getUserData();
        });
    }
}
;
export default ChangeDateUser;
//# sourceMappingURL=index.js.map