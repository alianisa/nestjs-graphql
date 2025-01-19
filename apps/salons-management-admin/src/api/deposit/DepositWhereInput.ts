import { DecimalFilter } from "../../util/DecimalFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type DepositWhereInput = {
  amount?: DecimalFilter;
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  orders?: OrderWhereUniqueInput;
  payments?: PaymentWhereUniqueInput;
};
