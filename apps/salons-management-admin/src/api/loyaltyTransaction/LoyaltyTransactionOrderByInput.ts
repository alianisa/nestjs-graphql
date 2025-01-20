import { SortOrder } from "../../util/SortOrder";

export type LoyaltyTransactionOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  order_id?: SortOrder;
  pointsEarned?: SortOrder;
  pointsSpent?: SortOrder;
  transactionType?: SortOrder;
  user_id?: SortOrder;
};
