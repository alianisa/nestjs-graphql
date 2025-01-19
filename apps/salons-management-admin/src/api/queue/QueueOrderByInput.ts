import { SortOrder } from "../../util/SortOrder";

export type QueueOrderByInput = {
  completed?: SortOrder;
  completedAt?: SortOrder;
  createdAt?: SortOrder;
  estimatedWaitTime?: SortOrder;
  id?: SortOrder;
  order_id?: SortOrder;
  queueNumber?: SortOrder;
  salon_id?: SortOrder;
  updatedAt?: SortOrder;
  employee_id?: SortOrder;
  user_id?: SortOrder;
};
