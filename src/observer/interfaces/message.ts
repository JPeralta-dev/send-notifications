import { LogLevel } from "../logger.js";

export interface MessageNotification {
    from: any,
    to: any,
    body: any,
    type: LogLevel
}