import { Payment } from "../payment/Payment";

export type MobilePaymentProvider = {
  apiKey: string | null;
  apiSecret: string | null;
  createdAt: Date | null;
  id: string;
  isActive: boolean | null;
  name: string;
  payments?: Array<Payment>;
  updatedAt: Date | null;
};
