
import { MessageNotification } from "../../observer/interfaces/message.js";
import { logger } from "../../observer/logger.js";
import { strategyNotifaction } from "../interfaces/strategyNotification.js";

export class SendPushNotificationStrategy implements strategyNotifaction {
    sendNotification(message: MessageNotification) {
        console.log(`Notification from ${message.from}, to ${message.to}, INFO: [${message.body}]`);
    }

}