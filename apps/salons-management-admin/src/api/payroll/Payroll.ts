import { Decimal } from "decimal.js";
import { UserProfile } from "../userProfile/UserProfile";

export type Payroll = {
  amount: Decimal;
  createdAt: Date;
  id: string;
  userProfiles?: UserProfile;
};
