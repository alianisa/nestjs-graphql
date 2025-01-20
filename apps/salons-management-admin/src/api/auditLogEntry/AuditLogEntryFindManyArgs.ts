import { AuditLogEntryWhereInput } from "./AuditLogEntryWhereInput";
import { AuditLogEntryOrderByInput } from "./AuditLogEntryOrderByInput";

export type AuditLogEntryFindManyArgs = {
  where?: AuditLogEntryWhereInput;
  orderBy?: Array<AuditLogEntryOrderByInput>;
  skip?: number;
  take?: number;
};
