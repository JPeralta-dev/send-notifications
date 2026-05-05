import { provider, ProviderStrategyNotification } from "../../strategy/provider/providerStrategy.js";
import { MessageNotification } from "../interfaces/message.js";
import { Publisher } from "../interfaces/publishers.js";
import { subject } from "../interfaces/subject.js";
import { logger } from "../logger.js";

export class ObserverNotification implements Publisher {
    update(subject: subject, message: MessageNotification): void {
        const StrategyNotificationDelegated = provider.getStrategy(message.type)
        StrategyNotificationDelegated?.sendNotification(message)
        logger.info(`INFO[ notification from ${message.type}] has been termined [${Date.now()}]`)
    }
}