import Handlebars from 'handlebars';
import { userType } from './../../types/index';
import { UsersService } from '../../services/index.js';
import { UserDataType } from '../../types/index.js';
import Block from '../../utils/Block/index.js';
import { tpl } from './template.tpl.js';

class ChangeDateUser extends Block {

    constructor(localProps: UserDataType) {
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
        })
    }
    changeUserProfile(newDataUser: userType) {
        UsersService.changeUserProfile(newDataUser).then((res: XMLHttpRequest) => {
            if (res) this.getUserData()
        })
    }
    changeUserAvatar(data: FormData) {
        UsersService.changeUserAvatar(data).then((res: XMLHttpRequest) => {
            if (res) this.getUserData()
        })
    }
};

export default ChangeDateUser;