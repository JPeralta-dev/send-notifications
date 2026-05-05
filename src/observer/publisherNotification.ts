import { MessageNotification } from "./interfaces/message.js";
import { Publisher } from "./interfaces/publishers.js";
import { subject } from "./interfaces/subject.js";
import { logger } from "./logger.js";

export class PublisherNotifycation implements subject {
    private obsevers: Publisher[] = [];

    addObserver(observer: Publisher): void {
        const isExist = this.obsevers.includes(observer);
        if (isExist) {
            logger.warn("Observer has been attached already.");
        }
        this.obsevers.push(observer);
    }

    deleteObserver(observer: Publisher): void {
        const index = this.obsevers.indexOf(observer);
        if (index !== -1) {
            this.obsevers.splice(index, 1);
        }
    }

    notify(message: MessageNotification): void {
        for (const observer of this.obsevers) {
            observer.update(this, message);
        }
    }

    public notificationBusiness(message: MessageNotification): void {
        if (!message) return logger.error("Error: no message to notify");
        this.notify(message);
    }
}
