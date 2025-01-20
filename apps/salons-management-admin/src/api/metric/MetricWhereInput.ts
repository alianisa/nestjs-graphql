import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type MetricWhereInput = {
  duration?: IntFilter;
  id?: StringFilter;
  metadata?: JsonFilter;
  success?: BooleanFilter;
  timestamp?: DateTimeFilter;
  typeField?: StringFilter;
};
