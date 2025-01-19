import { Decimal } from "decimal.js";
import { Deposit } from "../deposit/Deposit";
import { MobilePaymentProvider } from "../mobilePaymentProvider/MobilePaymentProvider";
import { Order } from "../order/Order";
import { Transaction } from "../transaction/Transaction";

export type Payment = {
  amount: Decimal;
  amountByCard: Decimal | null;
  amountByCash: Decimal | null;
  completed: boolean | null;
  completedAt: Date | null;
  createdAt: Date | null;
  deposits?: Array<Deposit>;
  discountAmount: Decimal | null;
  id: string;
  isPartial: boolean | null;
  mobilePaymentProviders?: MobilePaymentProvider | null;
  name: string | null;
  orderId: string;
  orders?: Array<Order>;
  payment_method?: "cash" | "card" | null;
  status?:
    | "Pending"
    | "Completed"
    | "PartiallyPaid"
    | "Failed"
    | "Cancelled"
    | "Refunded"
    | null;
  tax: Decimal | null;
  transactions?: Array<Transaction>;
  updatedAt: Date | null;
};
