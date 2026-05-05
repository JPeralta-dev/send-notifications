import { MessageNotification } from "../../observer/interfaces/message.js";
import { strategyNotifaction } from "../interfaces/strategyNotification.js";

export class SendEmailNotificationStrategy implements strategyNotifaction {
    sendNotification(message: MessageNotification): void {
        // Simulate Email API latency
        setTimeout(() => {
            const subject = (message.meta?.subject as string) ?? "Sin asunto";
            console.log(`[Email] From: ${message.from} → To: ${message.to} | Subject: ${subject} | Body: ${message.body}`);
        }, 2000);
    }
}
