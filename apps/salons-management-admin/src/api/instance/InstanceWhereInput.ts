import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InstanceWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  rawBaseConfig?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  uuid?: StringNullableFilter;
};
