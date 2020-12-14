import Handlebars from 'handlebars';
import Block from '../../utils/Block/index.js';
import { tpl } from './template.js';

type inputPropsType = {
    infoElement: {
        input: {
            type?: string;
            name?: string;
            error?: boolean;
            value?: string;
        },
    },
    onFocus?: Function,
    onBlur?: Function,
    onClick?: Function,
    onMouseEnter?: Function
}

class Input extends Block {

    private REG_EXP_LOGIN: any = /[A-Za-z]{3,}$/ig;
    private REG_EXP_PASSWORD: any = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ig;
    private REG_EXP_EMAIL: any = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[a-z]+/ig;
    private REG_EXP_PHONE: any = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/ig;
    constructor(props: inputPropsType) {
        super('div', props);
    };

    render() {
        const { infoElement } = this.props;
        const template = Handlebars.compile(tpl);
        return template(infoElement);
    };

    validation() {
        const value = this.content().children[0].value
        const result = !!value.match(this.REG_EXP_LOGIN);
        console.log(this.props, 'tutut');
        if (result) {
            this.setProps({
                infoElement: {
                    input: {
                        value: value,
                        error: false,
                    },
                },
            });
        } else {
            this.setProps({
                infoElement: {
                    input: {
                        value: value,
                        error: true,
                    },
                },
            });
        };
    };

    validPassword() {
        const value = this.content().children[0].value
        const result = !!value.match(this.REG_EXP_PASSWORD);
        if (result) {
            this.setProps({
                infoElement: {
                    input: {
                        value: value,
                        error: false,
                    },
                },
            });
        } else {
            this.setProps({
                infoElement: {
                    input: {
                        value: value,
                        error: true,
                    },
                },
            });
        };
    };

    validEmail() {
        const value = this.content().children[0].value
        const result = !!value.match(this.REG_EXP_EMAIL);
        if (result) {
            this.setProps({
                infoElement: {
                    input: {
                        value: value,
                        error: false
                    }
                }
            })
        } else {
            this.setProps({
                infoElement: {
                    input: {
                        value: value,
                        error: true
                    },
                },
            });
        };
    };

    validPhone() {
        const value = this.content().children[0].value
        const result = !!value.match(this.REG_EXP_PHONE);
        if (result) {
            this.setProps({
                infoElement: {
                    input: {
                        value: value,
                        error: false
                    }
                }
            })
        } else {
            this.setProps({
                infoElement: {
                    input: {
                        value: value,
                        error: true
                    },
                },
            });
        };
    };

};

export default Input;

