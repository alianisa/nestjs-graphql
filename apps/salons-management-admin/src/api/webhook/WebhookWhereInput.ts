import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type WebhookWhereInput = {
  createdAt?: DateTimeFilter;
  failureCount?: IntFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  lastSuccess?: DateTimeNullableFilter;
  lastTriggeredAt?: DateTimeNullableFilter;
  metadata?: JsonFilter;
  secret?: StringFilter;
  updatedAt?: DateTimeFilter;
  url?: StringFilter;
};
