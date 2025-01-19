import { Decimal } from "decimal.js";
import { Salon } from "../salon/Salon";
import { UserProfile } from "../userProfile/UserProfile";

export type UserAccount = {
  balance: Decimal | null;
  createdAt: Date | null;
  id: string;
  name: string | null;
  numberField: Decimal | null;
  salons?: Salon | null;
  typeField: string | null;
  updatedAt: Date | null;
  userProfiles?: UserProfile | null;
};
