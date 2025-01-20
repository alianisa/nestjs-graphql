import { InputJsonValue } from "../../types";

export type AuditLogEntryCreateInput = {
  createdAt?: Date | null;
  instanceId?: string | null;
  ipAddress: string;
  payload?: InputJsonValue;
};
