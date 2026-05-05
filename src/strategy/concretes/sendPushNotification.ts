import { MessageNotification } from "../../observer/interfaces/message.js";
import { strategyNotifaction } from "../interfaces/strategyNotification.js";
import { logger } from "../../observer/logger.js";

export class SendPushNotificationStrategy implements strategyNotifaction {
    sendNotification(message: MessageNotification): void {
        logger.info(`[Push] From: ${message.from} → To: ${message.to} | Body: ${message.body}`);
    }
}
