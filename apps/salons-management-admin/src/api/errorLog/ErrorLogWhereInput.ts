import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ErrorLogWhereInput = {
  createdAt?: DateTimeNullableFilter;
  errorContext?: StringNullableFilter;
  errorDetail?: StringNullableFilter;
  errorHint?: StringNullableFilter;
  errorMessage?: StringNullableFilter;
  functionName?: StringFilter;
  id?: StringFilter;
};
