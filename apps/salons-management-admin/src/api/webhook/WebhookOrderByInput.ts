import { SortOrder } from "../../util/SortOrder";

export type WebhookOrderByInput = {
  createdAt?: SortOrder;
  events?: SortOrder;
  failureCount?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  lastSuccess?: SortOrder;
  lastTriggeredAt?: SortOrder;
  metadata?: SortOrder;
  secret?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
