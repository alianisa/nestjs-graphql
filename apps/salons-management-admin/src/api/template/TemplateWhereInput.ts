import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type TemplateWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  locale?: StringFilter;
  metadata?: JsonFilter;
  name?: StringFilter;
  template?: StringFilter;
  type?: "sms" | "call";
  updatedAt?: DateTimeFilter;
  variables?: StringFilter;
};
