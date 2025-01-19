import { Decimal } from "decimal.js";

export type LoyaltyProgramCreateInput = {
  description?: string | null;
  minPointsForRedemption?: number | null;
  name: string;
  pointsPerCurrency: Decimal;
  redemptionRate?: Decimal | null;
  updatedAt?: Date | null;
};
