import { SortOrder } from "../../util/SortOrder";

export type MetricOrderByInput = {
  duration?: SortOrder;
  id?: SortOrder;
  metadata?: SortOrder;
  success?: SortOrder;
  timestamp?: SortOrder;
  typeField?: SortOrder;
};
