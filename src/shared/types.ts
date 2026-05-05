/**
 * Shared types — neutral ground to avoid circular dependencies
 * between `observer/` and `strategy/`.
 */

export type strategysNoficationTypes = "email" | "sms" | "push";

/**
 * Base notification message.
 *
 * - from / to: always strings (email address, phone number, or device token)
 * - body: the main message text
 * - meta: optional channel-specific extras (e.g. { subject: "..." } for email)
 */
export interface MessageNotification {
  from: string;
  to: string;
  body: string;
  type: strategysNoficationTypes;
  meta?: Record<string, unknown>;
}
