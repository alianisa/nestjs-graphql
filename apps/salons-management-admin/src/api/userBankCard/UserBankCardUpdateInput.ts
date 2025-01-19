import { Decimal } from "decimal.js";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type UserBankCardUpdateInput = {
  cvv?: Decimal | null;
  expDate?: Date | null;
  favorite?: boolean | null;
  main?: boolean | null;
  name?: string | null;
  numberField?: string | null;
  token?: string | null;
  updatedAt?: Date | null;
  userProfiles?: UserProfileWhereUniqueInput | null;
};
