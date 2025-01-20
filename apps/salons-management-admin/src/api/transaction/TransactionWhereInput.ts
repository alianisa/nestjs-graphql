import { DecimalFilter } from "../../util/DecimalFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: DecimalFilter;
  createdAt?: DateTimeNullableFilter;
  errorMessage?: StringNullableFilter;
  id?: StringFilter;
  orders?: OrderWhereUniqueInput;
  payments?: PaymentWhereUniqueInput;
  status?: StringNullableFilter;
  transactionType?: StringFilter;
};
