import { SortOrder } from "../../util/SortOrder";

export type DepositOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  order_id?: SortOrder;
  payment_id?: SortOrder;
};
