import { Webhook as TWebhook } from "../api/webhook/Webhook";

export const WEBHOOK_TITLE_FIELD = "secret";

export const WebhookTitle = (record: TWebhook): string => {
  return record.secret?.toString() || String(record.id);
};
