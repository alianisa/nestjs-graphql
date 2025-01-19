import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type SalonAccountWhereInput = {
  balance?: DecimalNullableFilter;
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  numberField?: DecimalNullableFilter;
  salons?: SalonWhereUniqueInput;
  typeField?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  userProfiles?: UserProfileWhereUniqueInput;
};
