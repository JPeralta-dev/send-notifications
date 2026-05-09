import { events } from "../index.js";
import { ObserverNotification } from "../observer/concrete/observerNotification.js";
import { PublisherNotifycation } from "../observer/publisherNotification.js";
import { MessageNotification } from "./types.js";

export const EmitterNotification = new PublisherNotifycation()

const subcriberNotifycationAlert = new ObserverNotification()

EmitterNotification.addObserver(subcriberNotifycationAlert)
