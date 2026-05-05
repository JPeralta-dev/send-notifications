import { strategysNoficationTypes } from "../../strategy/interfaces/typesStrategys.js";


export interface MessageNotification {
    from: any,
    to: any,
    body: any,
    type: strategysNoficationTypes
}