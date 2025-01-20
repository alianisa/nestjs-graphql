import { Decimal } from "decimal.js";
import { DepositUpdateManyWithoutPaymentsInput } from "./DepositUpdateManyWithoutPaymentsInput";
import { MobilePaymentProviderWhereUniqueInput } from "../mobilePaymentProvider/MobilePaymentProviderWhereUniqueInput";
import { OrderUpdateManyWithoutPaymentsInput } from "./OrderUpdateManyWithoutPaymentsInput";
import { TransactionUpdateManyWithoutPaymentsInput } from "./TransactionUpdateManyWithoutPaymentsInput";

export type PaymentUpdateInput = {
  amount?: Decimal;
  amountByCard?: Decimal | null;
  amountByCash?: Decimal | null;
  completed?: boolean | null;
  completedAt?: Date | null;
  createdAt?: Date | null;
  deposits?: DepositUpdateManyWithoutPaymentsInput;
  discountAmount?: Decimal | null;
  isPartial?: boolean | null;
  mobilePaymentProviders?: MobilePaymentProviderWhereUniqueInput | null;
  name?: string | null;
  orderId?: string;
  orders?: OrderUpdateManyWithoutPaymentsInput;
  payment_method?: "cash" | "card" | null;
  status?:
    | "Pending"
    | "Completed"
    | "PartiallyPaid"
    | "Failed"
    | "Cancelled"
    | "Refunded"
    | null;
  tax?: Decimal | null;
  transactions?: TransactionUpdateManyWithoutPaymentsInput;
  updatedAt?: Date | null;
};
