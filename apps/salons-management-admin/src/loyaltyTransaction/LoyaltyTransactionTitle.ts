import { LoyaltyTransaction as TLoyaltyTransaction } from "../api/loyaltyTransaction/LoyaltyTransaction";

export const LOYALTYTRANSACTION_TITLE_FIELD = "description";

export const LoyaltyTransactionTitle = (
  record: TLoyaltyTransaction
): string => {
  return record.description?.toString() || String(record.id);
};
