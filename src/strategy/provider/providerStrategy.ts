
import { SendPushNotificationStrategy } from "../concretes/sendPushNotification.js";
import { strategyNotifaction } from "../interfaces/strategyNotification.js";
import { strategysNoficationTypes } from "../interfaces/typesStrategys.js";

export class ProviderStrategyNotification {
    private readonly provider: Map<strategysNoficationTypes, strategyNotifaction>

    private constructor() {
        this.provider = new Map<strategysNoficationTypes, strategyNotifaction>([
            ['push', new SendPushNotificationStrategy()]
        ])
    }
}