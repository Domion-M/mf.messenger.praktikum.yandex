import Handlebars from 'handlebars';
import Block from '@block';
import { UserType, UserDataType } from '@types';
import { UsersService } from '@services';
import { modalErrorProfile } from '@pages';
import { tpl } from './template.tpl';

class ChangeDateUser extends Block {
  constructor(localProps: UserDataType) {
    super('div', localProps);
  }

  render() {
    const { infoElement } = this.props;
    const template = Handlebars.compile(tpl);
    return template(infoElement);
  }

  getUserData() {
    UsersService.getAuthUser().then((res: XMLHttpRequest) => {
      const data = JSON.parse(res.response);
      this.setProps({
        infoElement: {
          user: { ...data },
        },
      });
    }).catch(() => modalErrorProfile.openAndClose());
  }

  changeUserProfile(newDataUser: UserType) {
    UsersService.changeUserProfile(newDataUser).then((res: XMLHttpRequest) => {
      if (res) this.getUserData();
    }).catch(() => modalErrorProfile.openAndClose());
  }

  changeUserAvatar(data: FormData) {
    UsersService.changeUserAvatar(data).then((res: XMLHttpRequest) => {
      if (res) this.getUserData();
    }).catch(() => modalErrorProfile.openAndClose());
  }
}

export default ChangeDateUser;
