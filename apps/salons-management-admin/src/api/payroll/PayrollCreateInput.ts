import { Decimal } from "decimal.js";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type PayrollCreateInput = {
  amount: Decimal;
  createdAt: Date;
  userProfiles: UserProfileWhereUniqueInput;
};
