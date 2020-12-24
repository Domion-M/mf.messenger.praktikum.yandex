import { UsersService } from '../../services/index.js';
import { UserDataType } from '../../types/index.js';
import Block from '../../utils/Block/index.js';
import { tpl } from './template.tpl.js';

class UserData extends Block {

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
            const data = JSON.parse(res.response);
            this.setProps({
                infoElement: {
                    user: { ...data }
                },
            })
        })
    }
};

export default UserData;