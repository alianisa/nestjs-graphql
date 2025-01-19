import { Decimal } from "decimal.js";
import { DepositCreateNestedManyWithoutPaymentsInput } from "./DepositCreateNestedManyWithoutPaymentsInput";
import { MobilePaymentProviderWhereUniqueInput } from "../mobilePaymentProvider/MobilePaymentProviderWhereUniqueInput";
import { OrderCreateNestedManyWithoutPaymentsInput } from "./OrderCreateNestedManyWithoutPaymentsInput";
import { TransactionCreateNestedManyWithoutPaymentsInput } from "./TransactionCreateNestedManyWithoutPaymentsInput";

export type PaymentCreateInput = {
  amount: Decimal;
  amountByCard?: Decimal | null;
  amountByCash?: Decimal | null;
  completed?: boolean | null;
  completedAt?: Date | null;
  createdAt?: Date | null;
  deposits?: DepositCreateNestedManyWithoutPaymentsInput;
  discountAmount?: Decimal | null;
  isPartial?: boolean | null;
  mobilePaymentProviders?: MobilePaymentProviderWhereUniqueInput | null;
  name?: string | null;
  orderId: string;
  orders?: OrderCreateNestedManyWithoutPaymentsInput;
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
  transactions?: TransactionCreateNestedManyWithoutPaymentsInput;
  updatedAt?: Date | null;
};
