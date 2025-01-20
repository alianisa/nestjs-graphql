import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "name";

export const PaymentTitle = (record: TPayment): string => {
  return record.name?.toString() || String(record.id);
};
