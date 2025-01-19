import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  errorMessage?: SortOrder;
  id?: SortOrder;
  order_id?: SortOrder;
  payment_id?: SortOrder;
  status?: SortOrder;
  transactionType?: SortOrder;
};
