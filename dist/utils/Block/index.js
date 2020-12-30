import EventBus from '../EventBus/index.js';
class Block {
    constructor(tagName = "div", props = {}) {
        this._element = null;
        this._meta = null;
        this.setProps = (nextProps) => {
            if (!nextProps) {
                return;
            }
            ;
            const oldProps = Object.assign({}, this.props);
            Object.assign(this.props, nextProps);
            this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, nextProps);
        };
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props,
        };
        this.props = this._makePropsProxy(props);
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    _makePropsProxy(props) {
        const proxiedProps = new Proxy(props, {
            deleteProperty() {
                throw new Error("Can not change properties");
            },
            set(target, prop, value) {
                target[prop] = value;
                return true;
            },
        });
        return proxiedProps;
    }
    ;
    ;
    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
    ;
    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }
    ;
    _createResources() {
        const { tagName, props } = this._meta;
        const { className } = props;
        this._element = this._createDocumentElement(tagName);
        if (className) {
            this._element.classList.add(className);
        }
        ;
    }
    ;
    _createDocumentElement(tagName) {
        return document.createElement(tagName);
    }
    ;
    _componentDidMount() {
        this.componentDidMount(this.props);
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    ;
    componentDidMount(oldProps) {
        console.log(oldProps);
    }
    ;
    _componentDidUpdate(oldProps, newProps) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
        ;
    }
    ;
    componentDidUpdate(oldProps, newProps) {
        console.log(oldProps, 'oldProps', newProps, 'newProps');
        return true;
    }
    ;
    content() {
        return this._element;
    }
    ;
    _render() {
        const block = this.render();
        this._element.innerHTML = block;
        const element = Object.keys(this.props);
        element.forEach((el) => {
            if (el.includes('on')) {
                const act = el.slice(2).toLocaleLowerCase();
                this._element.children[0].addEventListener(`${act}`, this.props[el]);
            }
            ;
            if (el.includes('in')) {
                const act = el.slice(2).toLocaleLowerCase();
                this._element.addEventListener(`${act}`, this.props[el]);
            }
        });
    }
    ;
    render() { }
    ;
    show() {
        this.content().style.display = "block";
    }
    ;
    hide() {
        this.content().remove();
    }
    ;
}
Block.EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
};
;
export default Block;
//# sourceMappingURL=index.js.map