import { MessageNotification } from "./message.js";
import { Publisher } from "./publishers.js";

export interface subject {
    addObserver(observer: Publisher): void,
    deleteObserver(observer: Publisher): void,
    notify(message: MessageNotification): void
}