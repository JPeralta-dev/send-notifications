import { MessageNotification } from "./interfaces/message.js";
import { Publisher } from "./interfaces/publishers.js";
import { subject } from "./interfaces/subject.js"
import { logger } from "./logger.js";

export class PublisherNotifycation implements subject {
    private obsevers: Publisher[] = []

    addObserver(observer: Publisher): void {
        const isExist = this.obsevers.includes(observer) ? console.log('Observer has been attached already.') : null
        this.obsevers.push(observer)
    }
    deleteObserver(observer: Publisher): void {
        const isIndex = this.obsevers.indexOf(observer) === -1 ? -1 : this.obsevers.indexOf(observer)
        this.obsevers.slice(isIndex, 1)
    }
    notify(message: MessageNotification): void {
        for (const observer of this.obsevers) {
            observer.update(this, message)
        }
    }

    public notificationBusiness(message: MessageNotification) {
        if (!message) return logger.error('Error not message of notify')
        this.notify(message)
    }


}