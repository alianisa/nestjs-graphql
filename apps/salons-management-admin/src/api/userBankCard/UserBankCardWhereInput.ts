import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type UserBankCardWhereInput = {
  createdAt?: DateTimeNullableFilter;
  cvv?: DecimalNullableFilter;
  expDate?: DateTimeNullableFilter;
  favorite?: BooleanNullableFilter;
  id?: StringFilter;
  main?: BooleanNullableFilter;
  name?: StringNullableFilter;
  numberField?: StringNullableFilter;
  token?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  userProfiles?: UserProfileWhereUniqueInput;
};
