import { DecimalFilter } from "../../util/DecimalFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DepositListRelationFilter } from "../deposit/DepositListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MobilePaymentProviderWhereUniqueInput } from "../mobilePaymentProvider/MobilePaymentProviderWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type PaymentWhereInput = {
  amount?: DecimalFilter;
  amountByCard?: DecimalNullableFilter;
  amountByCash?: DecimalNullableFilter;
  completed?: BooleanNullableFilter;
  completedAt?: DateTimeNullableFilter;
  createdAt?: DateTimeNullableFilter;
  deposits?: DepositListRelationFilter;
  discountAmount?: DecimalNullableFilter;
  id?: StringFilter;
  isPartial?: BooleanNullableFilter;
  mobilePaymentProviders?: MobilePaymentProviderWhereUniqueInput;
  name?: StringNullableFilter;
  orderId?: StringFilter;
  orders?: OrderListRelationFilter;
  payment_method?: "cash" | "card";
  status?:
    | "Pending"
    | "Completed"
    | "PartiallyPaid"
    | "Failed"
    | "Cancelled"
    | "Refunded";
  tax?: DecimalNullableFilter;
  transactions?: TransactionListRelationFilter;
  updatedAt?: DateTimeNullableFilter;
};
