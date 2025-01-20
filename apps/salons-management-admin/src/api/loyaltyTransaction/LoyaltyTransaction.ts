import { Order } from "../order/Order";
import { UserProfile } from "../userProfile/UserProfile";

export type LoyaltyTransaction = {
  createdAt: Date | null;
  description: string | null;
  id: string;
  orders?: Order | null;
  pointsEarned: number | null;
  pointsSpent: number | null;
  transactionType: string;
  userProfiles?: UserProfile | null;
};
