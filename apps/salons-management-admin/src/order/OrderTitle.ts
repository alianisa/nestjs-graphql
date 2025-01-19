import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "canceledReason";

export const OrderTitle = (record: TOrder): string => {
  return record.canceledReason?.toString() || String(record.id);
};
