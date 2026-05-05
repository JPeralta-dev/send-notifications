
import { logger } from "../../observer/logger.js";
import { SendPushNotificationStrategy } from "../concretes/sendPushNotification.js";
import { strategyNotifaction } from "../interfaces/strategyNotification.js";
import { strategysNoficationTypes } from "../interfaces/typesStrategys.js";

export class ProviderStrategyNotification {
    private readonly provider: Map<strategysNoficationTypes, strategyNotifaction>

    constructor() {
        this.provider = new Map<strategysNoficationTypes, strategyNotifaction>([
            ['push', new SendPushNotificationStrategy()]
        ])
    }

    public getStrategy(type: strategysNoficationTypes): strategyNotifaction | undefined {
        const strategy = this.provider.get(type)

        if (!strategy) {
            logger.error('Methos No Implemented')
            return
        }

        return strategy
    }
}


export const provider = new ProviderStrategyNotification()