import { Decimal } from "decimal.js";
import { UserProfile } from "../userProfile/UserProfile";

export type UserBankCard = {
  createdAt: Date | null;
  cvv: Decimal | null;
  expDate: Date | null;
  favorite: boolean | null;
  id: string;
  main: boolean | null;
  name: string | null;
  numberField: string | null;
  token: string | null;
  updatedAt: Date | null;
  userProfiles?: UserProfile | null;
};
