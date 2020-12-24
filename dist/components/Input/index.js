import Block from '../../utils/Block/index.js';
import { tpl } from './template.js';
class Input extends Block {
    constructor(props) {
        super('div', props);
        this.REG_EXP_LOGIN = /[A-Za-z]{3,}$/ig;
        this.REG_EXP_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ig;
        this.REG_EXP_EMAIL = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[a-z]+/ig;
        this.REG_EXP_PHONE = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/ig;
    }
    ;
    render() {
        const { infoElement } = this.props;
        const template = Handlebars.compile(tpl);
        return template(infoElement);
    }
    ;
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
        }
        else {
            this.setProps({
                infoElement: {
                    input: {
                        name: element.name,
                        type: 'text',
                        value: element.value,
                        error: true,
                        active: 'error'
                    },
                },
            });
        }
        ;
    }
    ;
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
        }
        else {
            this.setProps(Object.assign(Object.assign({}, this.props), { infoElement: {
                    input: {
                        name: element.name,
                        value: element.value,
                        error: true,
                        type: 'password',
                        active: 'error'
                    },
                } }));
        }
        ;
    }
    ;
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
                    }
                }
            });
        }
        else {
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
        ;
    }
    ;
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
                    }
                }
            });
        }
        else {
            this.setProps({
                infoElement: {
                    input: {
                        name: element.name,
                        type: 'text',
                        value: element.value,
                        error: true,
                        active: 'error'
                    },
                },
            });
        }
        ;
    }
    ;
    getValue() {
        return this.content().children[0].value;
    }
    getElement() {
        return this.content().children[0];
    }
}
;
export default Input;
//# sourceMappingURL=index.js.map