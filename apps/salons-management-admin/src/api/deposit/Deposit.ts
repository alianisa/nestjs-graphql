import { Decimal } from "decimal.js";
import { Order } from "../order/Order";
import { Payment } from "../payment/Payment";

export type Deposit = {
  amount: Decimal;
  createdAt: Date | null;
  id: string;
  orders?: Order | null;
  payments?: Payment | null;
};
