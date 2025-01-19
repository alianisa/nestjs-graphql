import { Decimal } from "decimal.js";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type DepositUpdateInput = {
  amount?: Decimal;
  orders?: OrderWhereUniqueInput | null;
  payments?: PaymentWhereUniqueInput | null;
};
