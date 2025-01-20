import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type TransactionUpdateManyWithoutPaymentsInput = {
  connect?: Array<TransactionWhereUniqueInput>;
  disconnect?: Array<TransactionWhereUniqueInput>;
  set?: Array<TransactionWhereUniqueInput>;
};
