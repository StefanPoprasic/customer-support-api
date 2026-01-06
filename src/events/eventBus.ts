import { eventNames } from "node:cluster";
import { subscribe } from "node:diagnostics_channel";

type EventHandler<T> = (payload: T) => void;

class EventBus {
    private handlers: Record<string, EventHandler<any>[]>={};


        subscribe<T>(eventName: string, handler: EventHandler<T>){
            if(!this.handlers[eventName]){
                this.handlers[eventName] = [];
            }
            this.handlers[eventName].push(handler)
        }

        publish<T>(eventName: string, payload:T){
            const handlers = this.handlers[eventName] || [];
            for (const handler of handlers){
                handler(payload);
            }
        }

}
export const eventBus = new EventBus();