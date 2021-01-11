import Handlebars from 'handlebars';
import { InputPropsType } from '../../types';
import Block from '../../utils/Block';
import { tpl } from './template';

class Input extends Block {
  private REG_EXP_LOGIN: any = /[A-Za-z]{3,}$/ig;

  private REG_EXP_PASSWORD: any = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ig;

  private REG_EXP_EMAIL: any = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[a-z]+/ig;

  private REG_EXP_PHONE: any = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/ig;

  constructor(props: InputPropsType) {
    super('div', props);
  }

  render() {
    const { infoElement } = this.props;
    const template = Handlebars.compile(tpl);
    return template(infoElement);
  }

  validation() {
    const element = this.getElement();
    const result = !!element.value.match(this.REG_EXP_LOGIN);
    if (result) {
      this.setProps({
        infoElement: {
          input: {
            name: element.name,
            type: 'text',
            value: element.value,
            error: false,
            active: 'active',
          },
        },
      });
    } else {
      this.setProps({
        infoElement: {
          input: {
            name: element.name,
            type: 'text',
            value: element.value,
            error: true,
            active: 'error',
          },
        },
      });
    }
  }

  validPassword() {
    const element = this.getElement();
    const result = !!element.value.match(this.REG_EXP_PASSWORD);
    if (result) {
      this.setProps({
        infoElement: {
          input: {
            name: element.name,
            value: element.value,
            error: false,
            type: 'password',
            active: 'active',
          },
        },
      });
    } else {
      this.setProps({
        ...this.props,
        infoElement: {
          input: {
            name: element.name,
            value: element.value,
            error: true,
            type: 'password',
            active: 'error',
          },
        },
      });
    }
  }

  validEmail() {
    const element = this.getElement();
    const result = !!element.value.match(this.REG_EXP_EMAIL);
    if (result) {
      this.setProps({
        infoElement: {
          input: {
            name: element.name,
            type: 'text',
            value: element.value,
            error: false,
            active: 'active',
          },
        },
      });
    } else {
      this.setProps({
        infoElement: {
          input: {
            name: element.name,
            type: 'text',
            value: element.value,
            error: true,
            active: 'error',
          },
        },
      });
    }
  }

  validPhone() {
    const element = this.getElement();
    const result = !!element.value.match(this.REG_EXP_PHONE);
    if (result) {
      this.setProps({
        infoElement: {
          input: {
            name: element.name,
            type: 'text',
            value: element.value,
            error: false,
            active: 'active',
          },
        },
      });
    } else {
      this.setProps({
        infoElement: {
          input: {
            name: element.name,
            type: 'text',
            value: element.value,
            error: true,
            active: 'error',
          },
        },
      });
    }
  }

  getValue() {
    return this.content().children[0].value;
  }

  getElement() {
    return this.content().children[0];
  }

  changeValue(val = '') {
    const element = this.getElement();
    this.setProps({
      ...this.props,
      input: {
        name: element.name,
        type: 'text',
        value: val,
      },
    });
  }
}

export default Input;
