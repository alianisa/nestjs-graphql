import { SortOrder } from "../../util/SortOrder";

export type LoyaltyProgramOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  minPointsForRedemption?: SortOrder;
  name?: SortOrder;
  pointsPerCurrency?: SortOrder;
  redemptionRate?: SortOrder;
  updatedAt?: SortOrder;
};
