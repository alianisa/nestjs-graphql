import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type AuditLogEntryWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  instanceId?: StringNullableFilter;
  ipAddress?: StringFilter;
  payload?: JsonFilter;
};
