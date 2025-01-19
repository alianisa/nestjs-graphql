import { SortOrder } from "../../util/SortOrder";

export type AuditLogEntryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  instanceId?: SortOrder;
  ipAddress?: SortOrder;
  payload?: SortOrder;
};
