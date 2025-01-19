import { JsonValue } from "type-fest";

export type Webhook = {
  createdAt: Date;
  events?: Array<
    | "verification_sent"
    | "verification_verified"
    | "verification_failed"
    | "call_started"
    | "call_completed"
    | "call_failed"
    | "sms_sent"
    | "sms_delivered"
    | "sms_failed"
  >;
  failureCount: number;
  id: string;
  isActive: boolean;
  lastSuccess: Date | null;
  lastTriggeredAt: Date | null;
  metadata: JsonValue;
  secret: string;
  updatedAt: Date;
  url: string;
};
