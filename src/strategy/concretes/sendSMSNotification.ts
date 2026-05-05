import { MessageNotification } from "../../observer/interfaces/message.js";
import { strategyNotifaction } from "../interfaces/strategyNotification.js";

export class SendSMSNotificationStrategy implements strategyNotifaction {
    sendNotification(message: MessageNotification): void {
        // Simulate SMS API latency
        setTimeout(() => {
            console.log(`[SMS] From: ${message.from} → To: ${message.to} | Body: ${message.body}`);
        }, 1500);
    }
}
