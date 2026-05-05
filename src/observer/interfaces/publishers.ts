import { MessageNotification } from "./message.js";
import { subject } from "./subject.js";

export interface Publisher {
    update(subject: subject, message: MessageNotification): void
}