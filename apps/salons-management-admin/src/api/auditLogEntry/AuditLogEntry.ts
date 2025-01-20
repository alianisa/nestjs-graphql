import { JsonValue } from "type-fest";

export type AuditLogEntry = {
  createdAt: Date | null;
  id: string;
  instanceId: string | null;
  ipAddress: string;
  payload: JsonValue;
};
