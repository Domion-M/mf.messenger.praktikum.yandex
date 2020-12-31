import { modalErrorPassword } from './../../pages/changePassword/index.js';
import { UsersService } from '../../services/index.js';
import Block from '../../utils/Block/index.js';
import { tpl } from './template.tpl.js';
class ChangePasswordUser extends Block {
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
        }).catch(() => modalErrorPassword.openAndClose());
    }
    changeUserPassword(data) {
        UsersService.changeUserPassword(data).then((res) => {
            if (res)
                alert('Пароль успешно измененен');
        }).catch(() => modalErrorPassword.openAndClose());
    }
}
;
export default ChangePasswordUser;
//# sourceMappingURL=index.js.map