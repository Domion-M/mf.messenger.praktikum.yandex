import Handlebars from 'handlebars';
import Block from '@block';
import { UserDataType } from '@types';
import { UsersService } from '../../services';
import { tpl } from './template.tpl';

class UserData extends Block {
  data: {id?:number};

  constructor(localProps: UserDataType) {
    super('div', localProps);
    this.data = {};
  }

  render() {
    const { infoElement } = this.props;
    const template = Handlebars.compile(tpl);
    return template(infoElement);
  }

  getUserData() {
    UsersService.getAuthUser().then((res: XMLHttpRequest) => {
      const data = JSON.parse(res.response);
      this.data = data;
      this.setProps({
        infoElement: {
          user: { ...data },
        },
      });
    });
  }
}

export default UserData;
