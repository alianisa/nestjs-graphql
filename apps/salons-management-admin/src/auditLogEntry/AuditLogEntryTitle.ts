import { AuditLogEntry as TAuditLogEntry } from "../api/auditLogEntry/AuditLogEntry";

export const AUDITLOGENTRY_TITLE_FIELD = "instanceId";

export const AuditLogEntryTitle = (record: TAuditLogEntry): string => {
  return record.instanceId?.toString() || String(record.id);
};
