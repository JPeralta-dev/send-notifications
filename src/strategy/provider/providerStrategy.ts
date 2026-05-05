import { SendPushNotificationStrategy } from "../concretes/sendPushNotification.js";
import { SendSMSNotificationStrategy } from "../concretes/sendSMSNotification.js";
import { SendEmailNotificationStrategy } from "../concretes/sendEmailNotification.js";
import { logger } from "../../observer/logger.js";
import { strategyNotifaction } from "../interfaces/strategyNotification.js";
import { strategysNoficationTypes } from "../interfaces/typesStrategys.js";

export class ProviderStrategyNotification {
    private readonly provider: Map<strategysNoficationTypes, strategyNotifaction>;

    constructor() {
        this.provider = new Map<strategysNoficationTypes, strategyNotifaction>([
            ["push", new SendPushNotificationStrategy()],
            ["sms", new SendSMSNotificationStrategy()],
            ["email", new SendEmailNotificationStrategy()],
        ]);
    }

    public getStrategy(type: strategysNoficationTypes): strategyNotifaction | undefined {
        const strategy = this.provider.get(type);

        if (!strategy) {
            logger.error(`Method not implemented for channel: ${type}`);
            return;
        }

        return strategy;
    }
}

export const provider = new ProviderStrategyNotification();
