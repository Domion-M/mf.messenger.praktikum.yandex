import EventBus, { EventType } from '../EventBus/index.js';

export interface Props {
    eventBus?: EventType;
    props: any;
    infoElement?: object;
}

class Block {

    eventBus: () => EventType;
    props: Props;

    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render",
    };

    _element: any = null;
    _meta: any = null;

    _makePropsProxy(props: any) {
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
    };

    constructor(tagName = "div", props = {}) {
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props,
        };
        this.props = this._makePropsProxy(props);
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    };

    _registerEvents(eventBus: any) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    };

    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    };

    _createResources() {
        const { tagName, props } = this._meta;
        const { className } = props;
        this._element = this._createDocumentElement(tagName);
        if (className) {
            this._element.classList.add(className)
        };
    };

    _createDocumentElement(tagName: string) {
        return document.createElement(tagName);
    };

    _componentDidMount() {
        this.componentDidMount(this.props);
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    };

    componentDidMount(oldProps: any) {
        console.log(oldProps);
    };

    _componentDidUpdate(oldProps: any, newProps: any) {
        const response = this.componentDidUpdate(oldProps, newProps);

        if (response) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        };
    };

    componentDidUpdate(oldProps: any, newProps: any) {
        console.log(oldProps, newProps);
        return true;
    };

    setProps = (nextProps: any) => {
        if (!nextProps) {
            return;
        };

        const oldProps = Object.assign({}, this.props);
        Object.assign(this.props, nextProps);
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, nextProps);
    };

    get element() {
        return this._element;
    };

    _render() {
        const block = this.render();
        const element = Object.keys(this.props);

        element.forEach((el: any) => {
            if (el.includes('on')) {
                const act = el.slice(2).toLocaleLowerCase();
                this.getContent().addEventListener(`${act}`, this.props);
            };
        });

        this._element.innerHTML = block;
    };

    render() { };
    getContent() {
        return this.element;
    };

    show() {
        this.getContent().style.display = "block";
    };

    hide() {
        this.getContent().style.display = "none";
    };
};
export default Block;

