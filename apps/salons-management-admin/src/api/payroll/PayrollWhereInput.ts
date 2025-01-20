import { DecimalFilter } from "../../util/DecimalFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type PayrollWhereInput = {
  amount?: DecimalFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  userProfiles?: UserProfileWhereUniqueInput;
};
