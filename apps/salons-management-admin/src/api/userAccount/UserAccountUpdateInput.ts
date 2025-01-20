import { Decimal } from "decimal.js";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type UserAccountUpdateInput = {
  balance?: Decimal | null;
  createdAt?: Date | null;
  name?: string | null;
  numberField?: Decimal | null;
  salons?: SalonWhereUniqueInput | null;
  typeField?: string | null;
  updatedAt?: Date | null;
  userProfiles?: UserProfileWhereUniqueInput | null;
};
