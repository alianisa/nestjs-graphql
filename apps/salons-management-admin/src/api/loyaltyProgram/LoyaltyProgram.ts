import { Decimal } from "decimal.js";

export type LoyaltyProgram = {
  createdAt: Date | null;
  description: string | null;
  id: string;
  minPointsForRedemption: number | null;
  name: string;
  pointsPerCurrency: Decimal;
  redemptionRate: Decimal | null;
  updatedAt: Date | null;
};
