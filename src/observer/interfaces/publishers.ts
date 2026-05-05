import { subject } from "./subject.js";

export interface Publisher {
    update(subject: subject): void
}