import { InputJsonValue } from "../../types";

export type AuditLogEntryUpdateInput = {
  createdAt?: Date | null;
  instanceId?: string | null;
  ipAddress?: string;
  payload?: InputJsonValue;
};
