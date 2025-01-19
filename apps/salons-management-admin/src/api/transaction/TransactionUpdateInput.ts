import { Decimal } from "decimal.js";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: Decimal;
  errorMessage?: string | null;
  orders?: OrderWhereUniqueInput | null;
  payments?: PaymentWhereUniqueInput | null;
  status?: string | null;
  transactionType?: string;
};
