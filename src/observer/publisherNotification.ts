import { MessageNotification } from "./interfaces/message.js";
import { Publisher } from "./interfaces/publishers.js";
import { subject } from "./interfaces/subject.js";
import { logger } from "./logger.js";
import { strategysNoficationTypes } from "../shared/types.js";

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

    /**
     * Normal notification — goes to ONE channel (determined by message.type)
     */
    public notificationBusiness(message: MessageNotification): void {
        if (!message) return logger.error("Error: no message to notify");
        this.notify(message);
    }

    /**
     * ALERT — broadcasts the SAME message to ALL channels
     * This is business logic: the Publisher decides to fan-out
     */

    public alertAllChannels(baseMessage: Omit<MessageNotification, "type">): void {
        if (!baseMessage) return logger.error("Error: no message to alert");

        const channels: strategysNoficationTypes[] = ["email", "sms", "push"];

        logger.warn(`⚠ ALERT — Broadcasting to ALL channels: ${channels.join(", ")}`);

        for (const channel of channels) {
            const message: MessageNotification = { ...baseMessage, type: channel };
            this.notify(message);
        }
    }
}
