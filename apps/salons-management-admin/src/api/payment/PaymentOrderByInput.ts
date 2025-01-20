import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  amountByCard?: SortOrder;
  amountByCash?: SortOrder;
  completed?: SortOrder;
  completedAt?: SortOrder;
  createdAt?: SortOrder;
  discountAmount?: SortOrder;
  id?: SortOrder;
  isPartial?: SortOrder;
  mobile_payment_provider_id?: SortOrder;
  name?: SortOrder;
  orderId?: SortOrder;
  payment_method?: SortOrder;
  status?: SortOrder;
  tax?: SortOrder;
  updatedAt?: SortOrder;
};
