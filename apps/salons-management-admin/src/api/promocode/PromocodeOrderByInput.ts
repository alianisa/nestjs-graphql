import { SortOrder } from "../../util/SortOrder";

export type PromocodeOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  discount_id?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
  usageLimit?: SortOrder;
  usedCount?: SortOrder;
  userLimit?: SortOrder;
};
