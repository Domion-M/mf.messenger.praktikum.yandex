import Handlebars from 'handlebars';
import { modalErrorPassword } from './../../pages/changePassword';
import { UsersService } from '../../services';
import { ChangeUserPasswordType, UserPasswordType } from '../../types';
import Block from '../../utils/Block';
import { tpl } from './template.tpl';

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