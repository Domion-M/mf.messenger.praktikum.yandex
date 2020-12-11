import { EventType } from "../../types";

class EventBus implements EventType {
    listeners: {
        [s: string]: Function[];
    };
    constructor() {
        this.listeners = {};
    };

    on(event: any, callback: Function) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event: string, callback: any) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        };

        this.listeners[event] = this.listeners[event].filter(
            (listener: Function) => listener !== callback,
        );
    };

    emit(event: string, ...args: any) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        };

        this.listeners[event].forEach(function (listener: Function) {
            listener(...args);
        });
    };
};

export default EventBus;
