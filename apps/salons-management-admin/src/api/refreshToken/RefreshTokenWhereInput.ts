import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type RefreshTokenWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: BigIntFilter;
  instanceId?: StringNullableFilter;
  parent?: StringNullableFilter;
  revoked?: BooleanNullableFilter;
  sessions?: SessionWhereUniqueInput;
  token?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  userId?: StringNullableFilter;
};
