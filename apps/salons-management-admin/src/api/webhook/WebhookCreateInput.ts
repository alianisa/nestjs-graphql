import { InputJsonValue } from "../../types";

export type WebhookCreateInput = {
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
  isActive: boolean;
  lastSuccess?: Date | null;
  lastTriggeredAt?: Date | null;
  metadata?: InputJsonValue;
  secret: string;
  url: string;
};
