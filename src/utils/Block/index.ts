import { EventType } from '@types';
import EventBus from '../EventBus';

interface Props {
  [K: string]: Function | string | object;
}

class Block {
  eventBus: () => EventType;

  props: Props;

  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  _element: any = null;

  _meta: any = null;

  _makePropsProxy(props: any) {
    const proxiedProps = new Proxy(props, {
      deleteProperty() {
        throw new Error('Can not change properties');
      },
      set(target, prop, value) {
        // eslint-disable-next-line no-param-reassign
        target[prop] = value;
        return true;
      },
    });
    return proxiedProps;
  }

  constructor(tagName = 'div', props = {}) {
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

  _registerEvents(eventBus: any) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _createResources() {
    const { tagName, props } = this._meta;
    const { className } = props;
    this._element = this._createDocumentElement(tagName);
    if (className) {
      this._element.classList.add(className);
    }
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  _componentDidMount() {
    this.componentDidMount(this.props);
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidMount(_oldProps: object) {
  }

  _componentDidUpdate(oldProps: object, newProps: object) {
    const response = this.componentDidUpdate(oldProps, newProps);

    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(_oldProps: object, _newProps: object) {
    return true;
  }

  setProps = (nextProps: object) => {
    if (!nextProps) {
      return;
    }
    const oldProps = { ...this.props };
    Object.assign(this.props, nextProps);
    this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, nextProps);
  };

  content() {
    return this._element;
  }

  _render() {
    const block = this.render();
    this._element.innerHTML = block;
    const element = Object.keys(this.props);
    element.forEach((el: string) => {
      if (el.includes('on')) {
        const act = el.slice(2).toLocaleLowerCase();
        this._element.children[0].addEventListener(`${act}`, this.props[el]);
      }
      if (el.includes('in')) {
        const act = el.slice(2).toLocaleLowerCase();
        this._element.addEventListener(`${act}`, this.props[el]);
      }
    });
  }

  render() { }

  show() {
    this.content().style.display = 'block';
  }

  hide() {
    this.content().remove();
  }
}

export default Block;
