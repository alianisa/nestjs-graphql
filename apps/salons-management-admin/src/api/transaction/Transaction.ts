import { Decimal } from "decimal.js";
import { Order } from "../order/Order";
import { Payment } from "../payment/Payment";

export type Transaction = {
  amount: Decimal;
  createdAt: Date | null;
  errorMessage: string | null;
  id: string;
  orders?: Order | null;
  payments?: Payment | null;
  status: string | null;
  transactionType: string;
};
