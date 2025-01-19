import { LoyaltyTransactionWhereInput } from "./LoyaltyTransactionWhereInput";
import { LoyaltyTransactionOrderByInput } from "./LoyaltyTransactionOrderByInput";

export type LoyaltyTransactionFindManyArgs = {
  where?: LoyaltyTransactionWhereInput;
  orderBy?: Array<LoyaltyTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
