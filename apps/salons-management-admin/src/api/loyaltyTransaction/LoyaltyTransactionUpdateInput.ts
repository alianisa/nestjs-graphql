import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type LoyaltyTransactionUpdateInput = {
  description?: string | null;
  orders?: OrderWhereUniqueInput | null;
  pointsEarned?: number | null;
  pointsSpent?: number | null;
  transactionType?: string;
  userProfiles?: UserProfileWhereUniqueInput | null;
};
