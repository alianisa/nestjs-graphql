import { Decimal } from "decimal.js";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type PayrollUpdateInput = {
  amount?: Decimal;
  createdAt?: Date;
  userProfiles?: UserProfileWhereUniqueInput;
};
