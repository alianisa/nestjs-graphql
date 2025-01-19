import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IdentityWhereInput = {
  createdAt?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  identityData?: JsonFilter;
  lastSignInAt?: DateTimeNullableFilter;
  provider?: StringFilter;
  providerId?: StringFilter;
  updatedAt?: DateTimeNullableFilter;
  users?: UserWhereUniqueInput;
};
