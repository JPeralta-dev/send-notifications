import { MessageNotification } from "../../observer/interfaces/message.js";

export interface strategyNotifaction {
    sendNotification(message: MessageNotification): any
}