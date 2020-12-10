export interface EventType {
    on: (event: string, callback: void) => void;
    off: (event: string, callback: void) => void;
    emit: (event: string, oldProps?: {}, nextProps?: {}) => void;
}

class EventBus implements EventType {
    listeners: any;
    constructor() {
        this.listeners = {};
    }

    on(event: any, callback: any) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event: any, callback: any) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        };

        this.listeners[event] = this.listeners[event].filter(
            (listener: void) => listener !== callback,
        );
    };

    emit(event: any, ...args: any) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        };

        this.listeners[event].forEach(function (listener: any) {
            listener(...args);
        });
    };
};

export default EventBus;
