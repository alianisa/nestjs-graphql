import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "errorMessage";

export const TransactionTitle = (record: TTransaction): string => {
  return record.errorMessage?.toString() || String(record.id);
};
