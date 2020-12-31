import Handlebars from 'handlebars';
import { modalErrorPassword } from './../../pages/changePassword/index.js';
import { UsersService } from '../../services/index.js';
import { ChangeUserPasswordType, UserPasswordType } from '../../types/index.js';
import Block from '../../utils/Block/index.js';
import { tpl } from './template.tpl.js';

class ChangePasswordUser extends Block {

    constructor(localProps: UserPasswordType) {
        super("div", localProps);
    };

    render() {
        const { infoElement } = this.props;
        const template = Handlebars.compile(tpl);
        return template(infoElement);
    };
    getUserData() {
        UsersService.getAuthUser().then((res: XMLHttpRequest) => {
            const data = JSON.parse(res.response)
            this.setProps({
                infoElement: {
                    user: { ...data }
                },
            })
        }).catch(() => modalErrorPassword.openAndClose())
    }
    changeUserPassword(data: ChangeUserPasswordType) {
        UsersService.changeUserPassword(data).then((res: XMLHttpRequest) => {
            if (res) alert('Пароль успешно измененен');
        }).catch(() => modalErrorPassword.openAndClose())
    }
};

export default ChangePasswordUser;