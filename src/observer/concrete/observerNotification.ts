import { Publisher } from "../interfaces/publishers.js";
import { subject } from "../interfaces/subject.js";

export class ObserverNotification implements Publisher {
    update(subject: subject): void {
        throw new Error("Method not implemented.");
    }

}